import Timer from "./Timer";

export default function Question({question, handleTimeOut, showAnswer, userAnswered}) {
  return (
    <div id="question">
      <Timer handleTimeOut={handleTimeOut} showAnswer={showAnswer} userAnswered={userAnswered}/>
      <h2>{question}</h2>
    </div>
  );
}
