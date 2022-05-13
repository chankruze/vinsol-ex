/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 10:03:28 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { nanoid } from "nanoid";
import QuestionView from "./QuestionView";

interface ActiveQuizProps {
  endQuiz: () => void;
}

const ActiveQuiz: React.FC<ActiveQuizProps> = ({ endQuiz }) => {
  // random quiz id of 8 characters
  const quizId = nanoid(8);

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* header */}
      <div className="h-16 bg-white flex items-center justify-between p-2 border-b">
        {/* quiz id  */}
        <p className="font-mono py-1 px-2 bg-yellow-100 rounded-md">{quizId}</p>
        {/* end quiz button */}
        <button
          className="p-2 text-white bg-red-600 flex items-center justify-center
                cursor-pointer hover:bg-red-600/80 rounded-md"
          onClick={endQuiz}
        >
          End Quiz
        </button>
        {/* quiz score */}
        <p className="font-mono py-1 px-2 bg-fuchsia-200 rounded-md">
          Score: 0
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
