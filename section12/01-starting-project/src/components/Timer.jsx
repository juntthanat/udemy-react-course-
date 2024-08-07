import { useState, useEffect, useRef } from "react";

const NEXT_QUESTION_TIMER = 3000;

export default function Timer({ TIMER, handleTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  const [nextQuestionRemainingTime, setNextQuestionRemainingTime] =
    useState(NEXT_QUESTION_TIMER);
  const [loadingNextQuestion, setLoadingNextQuestion] = useState(false);
  const interval = useRef(null);
  const nextQuestionTime = useRef(null);
  const initialized = useRef(false);

  // useEffect(() => {
  //   interval.current = setInterval(() => {
  //     setRemainingTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(interval.current)
  //   }
  // }, [loadingNextQuestion]);

  // useEffect(() => {
  //   handleQuestionTimeInterval();
  // }, [])

  useEffect(() => {
    if(!initialized.current){
      initialized.current = true;
      handleQuestionTimeInterval();
    }
  })
  

  console.log(remainingTime)
  const handleQuestionTimeInterval = () => {
    interval.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval.current)
    }
  }

  useEffect(() => {
    if (remainingTime === 0) {
      clearInterval(interval.current);
      handleLoadingNextQuestion();
      console.log("Remaning Time = 0")
    }
  }, [remainingTime]);

  const handleLoadingNextQuestion = () => {
    nextQuestionTime.current = setInterval(() => {
      setNextQuestionRemainingTime((prevTime) => prevTime - 10);
    }, 10);

  };
  
  useEffect(() => {
    if (nextQuestionRemainingTime === 0) {
      clearInterval(nextQuestionTime)
      handleTimeOut();
      setRemainingTime(TIMER)
      // setLoadingNextQuestion(!loadingNextQuestion);
      handleQuestionTimeInterval();
    }
  }, [nextQuestionRemainingTime]);

  const startTimer = () => {
    handleQuestionTimeInterval();
  }

  return (
    <>
      {loadingNextQuestion ? (
        <progress max={NEXT_QUESTION_TIMER} value={nextQuestionRemainingTime} />
      ) : (
        <progress max={TIMER} value={remainingTime} />
      )}
      <button
        onClick={() => {
          startTimer();
        }}
      >
        stop
      </button>
    </>
  );
}
