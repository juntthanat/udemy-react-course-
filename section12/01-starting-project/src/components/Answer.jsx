import { useState, useEffect } from "react";

export default function Answer({
  answerList,
  handleClick,
  answered,
  showAnswer,
}) {
  const [randomAnswerArray, setRandomAnswerArray] = useState();
  const randomArray = shuffleList(
    Array(answerList.length)
      .fill(0)
      .map((_, idx) => idx)
  );

  const arrayList = [...answerList];
  const arrayId = ["0", "1", "2", "3"];

  const jointArray = [];
  for (let i = 0; i < arrayList.length && i < arrayId.length; i++)
    jointArray[i] = [arrayId[i], arrayList[i]];

  function shuffleList(sortedList) {
    const array = sortedList;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffleAnswerList = shuffleList(jointArray);

  useEffect(() => {
    setRandomAnswerArray(
      randomArray.map((random) => (
        <div className="answer" key={answerList[random]}>
          <button
            className={answered ? (random === 0 ? "correct" : "wrong") : null}
            onClick={handleClick}
            value={answerList[random]}
          >
            {answerList[random]} {random}
          </button>
        </div>
      ))
    );
  }, [showAnswer]);

  return (
    <div id="answers">
      {/* {randomArray.map((random) => (
        <div className="answer" key={answerList[random]}>
          <button
            className={answered ? (random === 0 ? "correct" : "wrong") : null}
            onClick={handleClick}
            value={answerList[random]}
          >
            {answerList[random]} {random}
          </button>
        </div>
      ))} */}
      {randomAnswerArray}
    </div>
  );
}
