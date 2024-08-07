import Timer from "./Timer";

const TIMER = 5000;

export default function Question({question, handleTimeOut}) {
  return (
    <div id="question">
      <Timer TIMER={TIMER} handleTimeOut={handleTimeOut}/>
      <h2>{question}</h2>
    </div>
  );
}
