/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 09:40:30 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import { QuizProvider } from "../../contexts/quizContext";
import ActiveQuiz from "./ActiveQuiz";
import InactiveQuiz from "./InactiveQuiz";
import Result from "./Result";

enum QuizStatus {
  ACTIVE,
  INACTIVE,
  OVER,
}

const Quiz = () => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>(QuizStatus.INACTIVE);

  const startQuiz = () => {
    setQuizStatus(QuizStatus.ACTIVE);
  };

  const endQuiz = () => {
    setQuizStatus(QuizStatus.OVER);
  };

  return (
    <QuizProvider>
      <div className="flex-1 bg-white overflow-y-auto">
        {/* quiz is active */}
        {quizStatus === QuizStatus.ACTIVE && (
          // reset logic 1: reset quiz
          // <ActiveQuiz endQuiz={endQuiz} resetQuiz={resetQuiz} />
          <ActiveQuiz endQuiz={endQuiz} />
        )}
        {/* quiz ended */}
        {quizStatus === QuizStatus.OVER && <Result />}
        {/* quiz is inactive (not started) */}
        {quizStatus === QuizStatus.INACTIVE && (
          <InactiveQuiz startQuiz={startQuiz} />
        )}
      </div>
    </QuizProvider>
  );
};

export default Quiz;
