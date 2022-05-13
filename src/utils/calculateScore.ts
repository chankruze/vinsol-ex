/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:18:16 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { QuestionType } from "../types/question";
import { SubmissionType } from "../types/submission";

export const checkAnswer = (
  question: QuestionType,
  submission: SubmissionType
): boolean => {
  const { answer } = question;

  if (submission[question.id]) {
    return Number(submission[question.id]) === answer;
  }

  return false;
};

export const calculateScore = (
  questions: Array<QuestionType>,
  submission: SubmissionType
) => {
  return questions.reduce((prev, question: QuestionType) => {
    if (checkAnswer(question, submission)) {
      return prev + 1;
    }
    return prev;
  }, 0);
};
