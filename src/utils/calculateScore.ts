/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:18:16 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { QuestionType } from "../types/question";
import { SubmissionType } from "../types/submission";

export const calculateScore = (
  questions: Array<QuestionType>,
  submission: SubmissionType
) => {
  return questions.reduce((prev, question: QuestionType) => {
    if (question.answer === submission[question.id]) {
      return prev + 1;
    }

    return prev;
  }, 0);
};
