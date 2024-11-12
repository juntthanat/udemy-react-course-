import { useState, useEffect, useRef } from "react";

const QUESTION_TIME = 5000;
const NEXT_QUESTION_TIME = 3000;

export default function Timer({ handleTimeOut, showAnswer, userAnswered }) {
  const [questionRemainingTime, setQuestionRemainingTime] =
    useState(QUESTION_TIME);
  const [nextQuestionRemainingTime, setNextQuestionRemainingTime] =
    useState(NEXT_QUESTION_TIME);
  const [showNewQuestion, setShowNewQuestion] = useState(false);
  const questionTimerInterval = useRef(null);
  const nextQuestionTimerInterval = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      handleQuestionTimeInterval();
    }
  });

  const handleQuestionTimeInterval = () => {
    questionTimerInterval.current = setInterval(() => {
      setQuestionRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(questionTimerInterval.current);
    };
  };

  useEffect(() => {
    if (questionRemainingTime === 0) {
      clearInterval(questionTimerInterval.current);
      setShowNewQuestion(true);
      showAnswer();
      // handleTimeOut();
      setNextQuestionRemainingTime(NEXT_QUESTION_TIME)
      handleLoadingNextQuestion();
    }
  }, [questionRemainingTime, userAnswered]);

  const handleLoadingNextQuestion = () => {
    nextQuestionTimerInterval.current = setInterval(() => {
      setNextQuestionRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(nextQuestionRemainingTime.current)
    }
  };

  useEffect(() => {
    if (nextQuestionRemainingTime === 0) {
      clearInterval(nextQuestionTimerInterval.current);
      // handleTimeOut();
      setQuestionRemainingTime(QUESTION_TIME);
      setShowNewQuestion(false);
      showAnswer();
      handleQuestionTimeInterval();
    }
  }, [nextQuestionRemainingTime]);

  const startTimer = () => {
    handleQuestionTimeInterval();
  };

  return (
    <>
      {showNewQuestion ? (
        <progress max={NEXT_QUESTION_TIME} value={nextQuestionRemainingTime} />
      ) : (
        <progress max={QUESTION_TIME} value={questionRemainingTime} />
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
