/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 10:03:28 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";
import { useQuiz } from "../../contexts/quizContext";
import { calculateScore } from "../../utils/calculateScore";
import Button from "../Layout/Button";
import QuestionView from "./QuestionView";

interface ActiveQuizProps {
  endQuiz: () => void;
}

const ActiveQuiz: React.FC<ActiveQuizProps> = ({ endQuiz }) => {
  // get quiz context
  // @ts-ignore
  const { id, questions, submission, resetQuiz } = useQuiz();

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* header */}
      <div className="h-16 bg-white flex items-center justify-between p-2 border-b">
        {/* quiz id  */}
        <p className="font-mono py-2 px-3 bg-gray-100 rounded-md">{id}</p>
        {/* action buttons */}
        <div className="flex items-center gap-2">
          <Button onClick={() => endQuiz()} bg="bg-red-500">
            <p>End Quiz</p>
          </Button>
          {/* reset logic 1: re-render quiz component */}
          <Button onClick={resetQuiz}>
            <p>Reset Quiz</p>
          </Button>
        </div>
        {/* quiz score */}
        <p className="font-mono py-2 px-3 bg-yellow-200 rounded-md">
          Score: {calculateScore(questions, submission)}
        </p>
      </div>
      {/* question */}
      <div className="flex-1">
        <QuestionView endQuiz={endQuiz} />
      </div>
    </div>
  );
};

export default ActiveQuiz;
