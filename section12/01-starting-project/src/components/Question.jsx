import Timer from "./Timer";

export default function Question({question, handleTimeOut}) {
  return (
    <div id="question">
      <Timer handleTimeOut={handleTimeOut}/>
      <h2>{question}</h2>
    </div>
  );
}
