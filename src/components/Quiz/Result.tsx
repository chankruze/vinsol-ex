/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:14:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useQuiz } from "../../contexts/quizContext";
import { QuestionType } from "../../types/question";
import { calculateScore, checkAnswer } from "../../utils/calculateScore";

const Result = () => {
  // @ts-ignore
  const { questions, submission } = useQuiz();
  // calculate score
  const score = calculateScore(questions, submission);

  return (
    <div className="flex flex-col">
      <p className="h-16 flex justify-center items-center text-2xl bg-blue-500 text-white">
        Your score is {score}
      </p>
      <div className="flex-1 overflow-y-auto p-2">
        {questions &&
          questions.length > 0 &&
          questions.map((question: QuestionType) => (
            <div
              key={question.id}
              className={`flex my-1 p-2 flex-col rounded-md ${
                checkAnswer(question, submission)
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              <p>
                <span className="text-gray-500">Question:</span>{" "}
                {question.question}
              </p>
              <p>
                <span className="text-gray-500">Correct Answer:</span>{" "}
                {question.answer}
              </p>
              <p>
                <span className="text-gray-500">Your Answer:</span>{" "}
                {submission[question.id]}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Result;
