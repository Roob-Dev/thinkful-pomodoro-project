import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Session from "./Session";
import PlayPauseStop from "./PlayPauseStop";
import TimeButtons from "./TimeButtons";

function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

function nextSession(focusDuration, breakDuration) {
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // ToDo: Allow the user to adjust the focus and break duration.
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <TimeButtons
        setFocusDuration={setFocusDuration}
        focusDuration={focusDuration}
        setBreakDuration={setBreakDuration}
        session={session}
        breakDuration={breakDuration}
      />
      <PlayPauseStop
        setIsTimerRunning={setIsTimerRunning}
        setFocusDuration={setFocusDuration}
        setSession={setSession}
        focusDuration={focusDuration}
        setBreakDuration={setBreakDuration}
        isTimerRunning={isTimerRunning}
      />
      <Session
        session={session}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
        isTimerRunning={isTimerRunning}
      />
    </div>
  );
}

export default Pomodoro;
