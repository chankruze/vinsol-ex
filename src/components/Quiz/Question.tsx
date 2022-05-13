/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 10:19:33 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useQuiz } from "../../contexts/quizContext";

interface QuestionProps {
  id: string;
  question: string;
  setAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ id, question, setAnswer }) => {
  return (
    <div className="p-2 flex flex-col justify-center items-center">
      {/* question */}
      <p className="text-xl">{question}</p>
      {/* answer */}
      <div className="py-4">
        <input
          type="number"
          placeholder="Enter your answer"
          className="p-3 text-xl bg-slate-100 outline-fuchsia-400"
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Question;
