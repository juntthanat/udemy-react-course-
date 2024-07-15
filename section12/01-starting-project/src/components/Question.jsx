import Timer from "./Timer";

const TIMER = 5000;

export default function Question({question}) {
  return (
    <div id="question">
      <Timer TIMER={TIMER} />
      <h2>{question}</h2>
    </div>
  );
}
