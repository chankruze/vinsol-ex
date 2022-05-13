/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 10:03:58 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import Button from "../Layout/Button";

interface InactiveQuizProps {
  startQuiz: () => void;
}

const InactiveQuiz: React.FC<InactiveQuizProps> = ({ startQuiz }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <Button onClick={() => startQuiz()}>
        <p className="uppercase text-sm tracking-wider">start quiz</p>
      </Button>
    </div>
  );
};

export default InactiveQuiz;
