/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 12:32:23 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";
import { config } from "../config";
import { QuestionType } from "../types/question";

const operators = ["+", "-", "*", "/"];

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateQuestions = (
  questionCount: number = config.DEFAULT_QUESTIONS_COUNT,
  timer: number = config.DEFAULT_TIMER
): Array<QuestionType> => {
  const questions: Array<QuestionType> = [];

  Array(questionCount)
    .fill(0)
    .forEach(() => {
      const num1 = randomNumber(1, 10);
      const num2 = randomNumber(1, 10);
      const operator = operators[randomNumber(0, operators.length - 1)];
      const q = `${num1} ${operator} ${num2}`;

      const question: QuestionType = {
        id: nanoid(),
        question: q,
        answer: ~~eval(q),
        // timer: timer,
      };
      questions.push(question);
    });

  return questions;
};
