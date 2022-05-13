import { nanoid } from "nanoid";
import { useState } from "react";
import Quiz from "./components/Quiz/Quiz";

function App() {
  // this way, the quiz will be reset when the user clicks the "Reset" button
  // the sate of the quiz will be inactive
  // another type of reset is to use the resetQuiz() function QuizProvider
  // const [quizId1, setQuizId1] = useState(nanoid(8));
  // const [quizId2, setQuizId2] = useState(nanoid(8));

  return (
    <>
      {/* reset logic 1: re-render quiz component */}
      {/* uncomment (L17, L18) comment & comment (L21, L22) logic 2 to see the difference */}

      {/* <Quiz key={quizId1} resetQuiz={() => setQuizId1(nanoid(8))} /> */}
      {/* <Quiz key={quizId2} resetQuiz={() => setQuizId1(nanoid(8))} /> */}

      {/* reset logic 2: sate update in context provider */}
      <Quiz />
      <Quiz />
    </>
  );
}

export default App;
