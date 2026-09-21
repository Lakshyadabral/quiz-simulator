// Shuffle an array using the Fisher-Yates algorithm
export function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

// Shuffle the questions
export function shuffleQuestions(questions) {
  return shuffleArray(questions);
}

// Shuffle answer options while keeping A, B, C, D
// in the correct visual sequence.
export function shuffleOptions(questions) {
  return questions.map((question) => {
    // Add an internal ID based on the original letter.
    const optionsWithId = question.options.map((option) => ({
      ...option,
      originalLetter: option.letter,
    }));

    // Shuffle the complete options
    const shuffledOptions = shuffleArray(optionsWithId);

    // Reassign A, B, C, D
    const updatedOptions = shuffledOptions.map(
      (option, index) => ({
        letter: String.fromCharCode(65 + index),
        text: option.text,
        originalLetter: option.originalLetter,
      })
    );

    // Determine which NEW letters are correct
    const updatedCorrectAnswers = updatedOptions
      .filter((option) =>
        question.correctAnswers.includes(
          option.originalLetter
        )
      )
      .map((option) => option.letter);

    // Remove internal tracking property
    const cleanedOptions = updatedOptions.map(
      ({ originalLetter, ...option }) => option
    );

    return {
      ...question,
      options: cleanedOptions,
      correctAnswers: updatedCorrectAnswers,
    };
  });
}

// Shuffle both questions and their options
export function prepareQuiz(questions) {
  const shuffledQuestions =
    shuffleQuestions(questions);

  return shuffleOptions(shuffledQuestions);
}