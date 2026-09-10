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

  const styleMap = [
    "p[style-name='Title'] => h1:fresh",
    "p[style-name='Heading 1'] => h2:fresh",
    "p[style-name='Heading 3'] => h3:fresh",
  ];

  const result = await mammoth.convertToHtml({ path: inputFile }, { styleMap });
  const html = result.value;

  const questions = parseQuestionsFromHtml(html);

  console.log(`Found ${questions.length} questions.`);

  const output = `export const questions = ${JSON.stringify(
    questions,
    null,
    2
  )};\n`;

  fs.writeFileSync(outputFile, output, "utf8");

  console.log(`Questions written to: ${outputFile}`);
}

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseQuestionsFromHtml(html) {
  const blockRegex = /<(h3|p)[^>]*>([\s\S]*?)<\/\1>/g;
  const blocks = [];
  let m;
  while ((m = blockRegex.exec(html)) !== null) {
    blocks.push({ tag: m[1], text: stripTags(m[2]) });
  }

  const questions = [];
  let currentQuestion = null;

  for (const block of blocks) {
    if (block.tag === "h3") {
      const qMatch = block.text.match(
        /^Question\s+(\d+)(?:\s*\(Choose\s+(\d+)\))?/i
      );
      if (qMatch) {
        if (currentQuestion) {
          questions.push(currentQuestion);
        }
        currentQuestion = {
          questionNumber: Number(qMatch[1]),
          question: "",
          options: [],
          correctAnswers: [],
          chooseCount: qMatch[2] ? Number(qMatch[2]) : 1,
        };
      }
      continue;
    }

    if (!currentQuestion) continue;
    if (!block.text) continue;

    // Require the period/paren after the letter — the source doc always
    // writes options as "A. text", so this is safe and avoids false-matching
    // question stems that start with the word "A " (e.g. "A developer must...").
    const optionMatch = block.text.match(/^([A-E])[\.\)]\s+(.*)$/);

    if (optionMatch) {
      const letter = optionMatch[1];
      const optionText = optionMatch[2];
      const isCorrect = optionText.includes("✅");
      const cleanText = optionText.replace(/✅/g, "").trim();

      currentQuestion.options.push({ letter, text: cleanText });
      if (isCorrect) {
        currentQuestion.correctAnswers.push(letter);
      }
      continue;
    }

    if (currentQuestion.options.length === 0) {
      if (currentQuestion.question) {
        currentQuestion.question += " ";
      }
      currentQuestion.question += block.text;
    }
  }

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