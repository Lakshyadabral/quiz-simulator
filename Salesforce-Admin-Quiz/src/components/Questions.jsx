import React from "react";

function Questions({
  question,
  selectedAnswers,
  onAnswerSelect,
  answerSubmitted,
}) {
  if (!question) {
    return null;
  }

  const isMultipleChoice = question.chooseCount > 1;

  const handleOptionClick = (letter) => {
    // Don't allow answers to be changed after submission
    if (answerSubmitted) {
      return;
    }

    onAnswerSelect(letter);
  };

  return (
    <div className="question-container">
      {/* Question */}
      <div className="question-header">
        <h2>{question.question}</h2>

        {isMultipleChoice && (
          <p className="choose-count">
            Choose {question.chooseCount}
          </p>
        )}
      </div>

      {/* Answer Options */}
      <div className="options-container">
        {question.options.map((option) => {
          const isSelected = selectedAnswers.includes(
            option.letter
          );

          return (
            <button
              key={option.letter}
              type="button"
              className={`option-button ${
                isSelected ? "selected" : ""
              } ${
                answerSubmitted ? "disabled" : ""
              }`}
              onClick={() =>
                handleOptionClick(option.letter)
              }
              disabled={answerSubmitted}
            >
              <span className="option-letter">
                {option.letter}
              </span>

              <span className="option-text">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
