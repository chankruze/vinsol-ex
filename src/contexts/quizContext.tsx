/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:46:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, {
  createContext,
  ReactInstance,
  ReactNode,
  useContext,
} from "react";
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
  const [questions, setQuestions] = React.useState<Array<QuestionType>>(
    generateQuestions()
  );
  const [submission, setSubmission] = React.useState<SubmissionType>({});

  const setSubmissionCallback = (submission: SubmissionType) => {
    setSubmission(submission);
  };

  const value = {
    questions,
    submission,
    setSubmission: setSubmissionCallback,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
