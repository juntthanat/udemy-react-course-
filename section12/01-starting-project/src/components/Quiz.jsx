import { useEffect, useState } from "react";
import questions from "../../../questions";
import Question from "./Question";
import Answer from "./Answer";

export default function Quiz() {
  const [questionId, setQuestionId] = useState(0);
  // const [questionText, setQuestionText] = useState(questions[questionId].text);
  // const [answerList, setAnswerList] = useState(questions[questionId].answers);

  function handleClick(event) {
    console.log(event.target.value)
    if (questionId < questions.length - 1) {
      setQuestionId(questionId + 1);
    }
  }

  return (
    <div id="quiz">
      <Question question={questions[questionId].text} />
      <Answer
        answerList={questions[questionId].answers}
        handleClick={handleClick}
      />
    </div>
  );
}
