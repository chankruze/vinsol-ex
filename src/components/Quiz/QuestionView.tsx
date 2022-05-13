/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 10:35:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";
import { config } from "../../config";
import { useQuiz } from "../../contexts/quizContext";
import { QuestionType } from "../../types/question";

interface QuestionViewProps {
  endQuiz: () => void;
}

const QuestionView: React.FC<QuestionViewProps> = ({ endQuiz }) => {
  // @ts-ignore
  const { questions, submission, setSubmission } = useQuiz();
  // active question
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeQuestionAnswer, setActiveQuestionAnswer] = useState("");
  // timer
  const [timer, setTimer] = useState(config.DEFAULT_TIMER);

  const nextQuestion = () => {
    if (activeQuestionIndex < questions.length - 1) {
      // save the answer (mutate the submission object)
      setSubmission({
        ...submission,
        [activeQuestion.id]: activeQuestionAnswer,
      });
      // reset the answer
      setActiveQuestionAnswer("");
      // increment active question index
      setActiveQuestionIndex((prev) => prev + 1);
      // reset timer
      setTimer(config.DEFAULT_TIMER);
    }
  };

  const submit = () => {
    // save the answer (mutate the submission object)
    setSubmission({
      ...submission,
      [activeQuestion.id]: activeQuestionAnswer,
    });
    // end quiz
    endQuiz();
  };

  useEffect(() => {
    // set timer
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    // on last question:
    // 1.  clear interval
    // 2.  move to result view
    if (timer === 0 && activeQuestionIndex === questions.length - 1) {
      clearInterval(interval);
      submit();
      return;
    }

    // next question
    if (timer === 0) {
      clearInterval(interval);
      nextQuestion();
    }

    // clear timer
    return () => clearInterval(interval);
  }, [timer, questions, activeQuestionIndex]);

  // get active question
  const activeQuestion: QuestionType = questions[activeQuestionIndex];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-2">
        {/* question position */}
        <p className="text-gray-400">
          Question {activeQuestionIndex + 1} of {questions.length}
        </p>
        {/* show timer */}
        <div className="flex items-center justify-center gap-1">
          <p>
            <span className="font-mono">{timer}</span> seconds
          </p>
        </div>
      </div>
      {/* render active question */}
      <div className="flex-1 flex justify-center items-center">
        <div className="p-2 flex flex-col justify-center items-center">
          {/* question */}
          <p className="text-3xl font-bold">{activeQuestion.question}</p>
          {/* answer */}
          <div className="py-4">
            <input
              type="number"
              placeholder="Enter your answer"
              className="p-3 text-xl bg-slate-50 border-b-2 border-b-fuchsia-400 
              focus:outline-none rounded-t-md"
              onChange={(e) => setActiveQuestionAnswer(e.target.value)}
              value={activeQuestionAnswer}
            />
          </div>
        </div>
      </div>
      {/* render the next button only the next question is available */}
      {activeQuestionIndex < questions.length - 1 ? (
        <div
          className="h-16 bg-blue-600 text-white border-t tracking-widest 
          flex items-center justify-center cursor-pointer text-xl 
          hover:bg-blue-600/80 duration-150"
          onClick={nextQuestion}
        >
          <p className="uppercase text-sm">next</p>
        </div>
      ) : (
        <div
          className="h-16 bg-blue-600 text-white border-t tracking-widest 
        flex items-center justify-center cursor-pointer text-xl 
        hover:bg-blue-600/80 duration-150"
          onClick={submit}
        >
          <p className="uppercase text-sm">submit</p>
        </div>
      )}
    </div>
  );
};

export default QuestionView;
