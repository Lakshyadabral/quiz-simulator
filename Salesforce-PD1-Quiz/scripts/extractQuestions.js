import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(
  __dirname,
  "..",
  "source",
  "PD1_Master_Practice_Questions.docx"
);

const outputFile = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "questions.js"
);

async function extractQuestions() {
  console.log("Reading DOCX...");

  const result = await mammoth.extractRawText({
    path: inputFile,
  });

  const text = result.value;

  const questions = parseQuestions(text);

  console.log(`Found ${questions.length} questions.`);

  const output = `export const questions = ${JSON.stringify(
    questions,
    null,
    2
  )};\n`;

  fs.writeFileSync(outputFile, output, "utf8");

  console.log(`Questions written to: ${outputFile}`);
}

function parseQuestions(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const questions = [];

  let currentQuestion = null;

  for (const line of lines) {
    // Detect:
    // Question 1
    // Question 2 (Choose 2)
    // Question 6(Choose 3)
    const questionMatch = line.match(
      /^Question\s+(\d+)(?:\s*\(Choose\s+(\d+)\))?$/i
    );

    if (questionMatch) {
      if (currentQuestion) {
        questions.push(currentQuestion);
      }

      currentQuestion = {
        questionNumber: Number(questionMatch[1]),
        question: "",
        options: [],
        correctAnswers: [],
        chooseCount: questionMatch[2]
          ? Number(questionMatch[2])
          : 1,
      };

      continue;
    }

    if (!currentQuestion) {
      continue;
    }

    // Detect answer choices:
    // A. Something
    // B. Something
    // C. Something
    // D. Something
    // E. Something
    const optionMatch = line.match(/^([A-E])[\.\)]?\s+(.*)$/);

    if (optionMatch) {
      const letter = optionMatch[1];
      const optionText = optionMatch[2];

      const isCorrect = optionText.includes("✅");

      const cleanText = optionText
        .replace(/✅/g, "")
        .trim();

      currentQuestion.options.push({
        letter,
        text: cleanText,
      });

      if (isCorrect) {
        currentQuestion.correctAnswers.push(letter);
      }

      continue;
    }

    // Ignore section headings
    if (
      line.toUpperCase() === "20 QUESTIONS SET" ||
      line.toUpperCase().startsWith("[CORRECT ANSWER")
    ) {
      continue;
    }

    // Everything else belongs to the question text.
    if (currentQuestion.options.length === 0) {
      if (currentQuestion.question) {
        currentQuestion.question += " ";
      }

      currentQuestion.question += line;
    }
  }

  // Add final question
  if (currentQuestion) {
    questions.push(currentQuestion);
  }

  return questions;
}

extractQuestions().catch((error) => {
  console.error("Extraction failed:");
  console.error(error);
  process.exit(1);
});