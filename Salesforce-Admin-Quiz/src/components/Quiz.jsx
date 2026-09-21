import React, { useState } from "react";
import { questions } from "../data/questions";
import { prepareQuiz } from "../utils/shuffle";
import Questions from "./Questions";

function Quiz() {
  // Create a shuffled quiz when the component starts
  const [quizQuestions, setQuizQuestions] = useState(() =>
    prepareQuiz(questions)
  );

  // Current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Answers selected by the user
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // Whether the current answer has been submitted
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  // Whether the current answer was correct
  const [currentAnswerCorrect, setCurrentAnswerCorrect] =
    useState(false);

  // Total correct answers
  const [score, setScore] = useState(0);

  // Whether the quiz is finished
  const [quizFinished, setQuizFinished] = useState(false);

  // Store every question result for the review screen later
  const [answerHistory, setAnswerHistory] = useState([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Handle selecting an answer
  const handleAnswerSelect = (letter) => {
    // Don't allow changes after submitting
    if (answerSubmitted) {
      return;
    }

    // Multiple-answer question
    if (currentQuestion.chooseCount > 1) {
      setSelectedAnswers((previousAnswers) => {
        // If the answer is already selected, remove it
        if (previousAnswers.includes(letter)) {
          return previousAnswers.filter(
            (answer) => answer !== letter
          );
        }

        // Don't allow more selections than required
        if (
          previousAnswers.length >=
          currentQuestion.chooseCount
        ) {
          return previousAnswers;
        }

        return [...previousAnswers, letter];
      });

      return;
    }

    // Single-answer question
    setSelectedAnswers([letter]);
  };

  // Submit the current answer
  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
      return;
    }

    // Sort both arrays so answer order doesn't matter
    const userAnswers = [...selectedAnswers].sort();
    const correctAnswers = [
      ...currentQuestion.correctAnswers,
    ].sort();

    // Check whether the selected answers exactly match
    // the correct answers
    const isCorrect =
      userAnswers.length === correctAnswers.length &&
      userAnswers.every(
        (answer, index) =>
          answer === correctAnswers[index]
      );

    setCurrentAnswerCorrect(isCorrect);
    setAnswerSubmitted(true);

    // Increase score if correct
    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    // Save the result for later review
    setAnswerHistory((previousHistory) => [
      ...previousHistory,
      {
        question: currentQuestion,
        selectedAnswers: [...selectedAnswers],
        correctAnswers: [...currentQuestion.correctAnswers],
        isCorrect,
      },
    ]);
  };

  // Move to the next question
  const handleNext = () => {
    // If this was the last question, finish the quiz
    if (
      currentQuestionIndex ===
      quizQuestions.length - 1
    ) {
      setQuizFinished(true);
      return;
    }

    // Move to the next question
    setCurrentQuestionIndex(
      (previousIndex) => previousIndex + 1
    );

    // Reset answer state
    setSelectedAnswers([]);
    setAnswerSubmitted(false);
    setCurrentAnswerCorrect(false);
  };

  // Restart the quiz
  const handleRestart = () => {
    setQuizQuestions(prepareQuiz(questions));
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setAnswerSubmitted(false);
    setCurrentAnswerCorrect(false);
    setScore(0);
    setAnswerHistory([]);
    setQuizFinished(false);
  };

  // Calculate results
  if (quizFinished) {
    const correct = score;
    const incorrect = quizQuestions.length - score;

    const percentage = Math.round(
      (correct / quizQuestions.length) * 100
    );

    return (
      <div className="quiz-container">
        <div className="results-container">
          <h1>Quiz Complete!</h1>

          <div className="score">
            {percentage}%
          </div>

          <div className="results-summary">
            <div className="result-item">
              <span>Correct</span>
              <strong>{correct}</strong>
            </div>

            <div className="result-item">
              <span>Incorrect</span>
              <strong>{incorrect}</strong>
            </div>

            <div className="result-item">
              <span>Total</span>
              <strong>{quizQuestions.length}</strong>
            </div>
          </div>

          <div className="results-actions">
            <button
              type="button"
              className="restart-button"
              onClick={handleRestart}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Quiz Header */}
      <div className="quiz-header">
        <div className="question-progress">
          Question {currentQuestionIndex + 1} of{" "}
          {quizQuestions.length}
        </div>

        <div className="score-display">
          Score: {score}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${
              ((currentQuestionIndex + 1) /
                quizQuestions.length) *
              100
            }%`,
          }}
        />
      </div>

      {/* Question */}
      <Questions
        question={currentQuestion}
        selectedAnswers={selectedAnswers}
        onAnswerSelect={handleAnswerSelect}
        answerSubmitted={answerSubmitted}
      />

      {/* Answer Feedback */}
      {answerSubmitted && (
        <div
          className={`answer-feedback ${
            currentAnswerCorrect
              ? "correct-feedback"
              : "incorrect-feedback"
          }`}
        >
          <h3>
            {currentAnswerCorrect
              ? "✓ Correct!"
              : "✗ Incorrect"}
          </h3>

          <div className="feedback-content">
            <p>
              <strong>Your answer:</strong>
            </p>

            {selectedAnswers.map((letter) => {
              const selectedOption =
                currentQuestion.options.find(
                  (option) =>
                    option.letter === letter
                );

              return (
                <p key={letter}>
                  {letter}. {selectedOption?.text}
                </p>
              );
            })}

            {!currentAnswerCorrect && (
              <>
                <p className="correct-answer-label">
                  <strong>Correct answer:</strong>
                </p>

                {currentQuestion.correctAnswers.map(
                  (letter) => {
                    const correctOption =
                      currentQuestion.options.find(
                        (option) =>
                          option.letter === letter
                      );

                    return (
                      <p key={letter}>
                        {letter}. {correctOption?.text}
                      </p>
                    );
                  }
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Quiz Actions */}
      <div className="quiz-actions">
        {!answerSubmitted ? (
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
            disabled={selectedAnswers.length === 0}
          >
            Submit Answer
          </button>
        ) : (
          <button
            type="button"
            className="next-button"
            onClick={handleNext}
          >
            {currentQuestionIndex ===
            quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

