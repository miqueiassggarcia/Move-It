import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: Number;
  seconds: Number;
  workHasFinished: Boolean;
  relieveHasFinished: Boolean;
  isActive: Boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider( {children}: CountdownProviderProps ) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [workHasFinished, setWorkHasFinished] = useState(false);
  const [relieveHasFinished, setRelieveHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setWorkHasFinished(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 10)
    } else if (isActive && time === 0) {
      if (!workHasFinished) {
        setWorkHasFinished(true);
        startNewChallenge();
        setTime(5 * 60)
      }
      if (workHasFinished) {
        setRelieveHasFinished(true)
      }
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      workHasFinished,
      relieveHasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}