import Timer from "./Timer";

export default function Question({question, handleTimeOut, showAnswer}) {
  return (
    <div id="question">
      <Timer handleTimeOut={handleTimeOut} showAnswer={showAnswer}/>
      <h2>{question}</h2>
    </div>
  );
}
