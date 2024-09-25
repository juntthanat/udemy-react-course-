import { useEffect, useState } from "react";
import questions from "../../../questions";
import Question from "./Question";
import Answer from "./Answer";

export default function Quiz() {
  const [questionId, setQuestionId] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
    skipped: 0,
  });

  function handleCorrect() {
    setScore({
      ...score,
      correct: score.correct + 1,
    });
  }
  function handleIncorrect() {
    setScore({
      ...score,
      incorrect: score.incorrect + 1,
    });
  }
  function handleSkipped() {
    setScore({
      ...score,
      skipped: score.skipped + 1,
    });
  }

  function checkAnswer(id) {
    if (id === 0) {
      handleCorrect();
    } else if (remainingTime === 0) {
      handleSkipped();
    } else {
      handleIncorrect();
    }
  }

  function handleClick_TimeOut() {
    if (questionId < questions.length - 1) {
      setQuestionId(questionId + 1);
    }
  }

  function handleShow_Answer() {
    setAnswered(!answered)
  }

  return (
    <div id="quiz">
      <Question question={questions[questionId].text} handleTimeOut={handleClick_TimeOut} showAnswer={handleShow_Answer}/>
      <Answer
        answerList={questions[questionId].answers}
        handleClick={handleClick_TimeOut}
        
        answered={answered}
      />
    </div>
  );
}
