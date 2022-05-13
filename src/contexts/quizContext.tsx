/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:46:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";
import React, { createContext, ReactNode, useContext } from "react";
import { QuestionType } from "../types/question";
import { SubmissionType } from "../types/submission";
import { generateQuestions } from "../utils/generateQuestions";

interface QuizContextInterface {
  questions: Array<QuestionType>;
  submission: SubmissionType;
  setSubmission: (submission: SubmissionType) => void;
}

const QuizContext = createContext<QuizContextInterface | null>(null);

// use quiz context
export const useQuiz = () => {
  return useContext(QuizContext);
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  // quiz id
  const [quizId, setQuizId] = React.useState(nanoid(8));
  // questions
  const [questions, setQuestions] = React.useState<Array<QuestionType>>(
    generateQuestions()
  );
  // submission
  const [submission, setSubmission] = React.useState<SubmissionType>({});
  // mutate submission
  const setSubmissionCallback = (submission: SubmissionType) => {
    setSubmission(submission);
  };
  // reset quiz
  // A better way to reset is to update the key of the context value
  // and then re-render the component.
  const resetQuiz = () => {
    setQuizId(nanoid(8));
    setQuestions(generateQuestions());
    setSubmission({});
  };

  // context value
  const value = {
    id: `#${quizId}`,
    questions,
    submission,
    setSubmission: setSubmissionCallback,
    resetQuiz,
  };

  // provider
  return (
    <QuizContext.Provider value={value} key={quizId}>
      {children}
    </QuizContext.Provider>
  );
};
