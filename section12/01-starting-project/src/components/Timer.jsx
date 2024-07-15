import { useState, useEffect } from "react";
export default function Timer({TIMER}) {

    const [remainingTime, setRemainingTime] = useState(TIMER)


    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10)
  
      // return(
      //   clearInterval(interval)
      // )
    },[])

    return (
        <progress max={TIMER} value={remainingTime}/>
    )
}