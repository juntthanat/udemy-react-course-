export default function Answer({ answerList, handleClick }) {
  return (
    <div id="answers">
      {answerList.map((answer, key) => (
        <div className="answer" key={key}>
          <button onClick={handleClick} value={key}>{answer}</button>
        </div>
      ))}
    </div>
  );
}
