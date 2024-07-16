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
      incorrect: score.incorrect + 1
    })
  }
  function handleSkipped() {
    setScore({
      ...score, skipped: score.skipped + 1
    })
  }
  // const [questionText, setQuestionText] = useState(questions[questionId].text);
  // const [answerList, setAnswerList] = useState(questions[questionId].answers);

  function handleClick(event) {
    console.log(event.target.value);
    if (questionId < questions.length - 1) {
      setQuestionId(questionId + 1);
    }
    setAnswered(true)
  }

  return (
    <div id="quiz">
      <Question question={questions[questionId].text} />
      <Answer
        answerList={questions[questionId].answers}
        handleClick={handleClick}
        answered={answered}
      />
    </div>
  );
}
