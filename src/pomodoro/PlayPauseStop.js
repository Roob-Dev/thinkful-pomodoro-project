import React from "react";
import classNames from "../utils/class-names";

const PlayPauseStop = ({
  setIsTimerRunning,
  setFocusDuration,
  setSession,
  focusDuration,
  setBreakDuration,
  isTimerRunning,
}) => {
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      // when session state is null
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState; // returns true or false depending on when you are paused or play
    });
  }

  //handle the stop button onClick
  const stop = () => {
    //set everything to default values
    setIsTimerRunning();
    setFocusDuration(25);
    setBreakDuration(5);
    setSession(null);
  };
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            data-testid="stop"
            onClick={stop}
            disabled={!isTimerRunning}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayPauseStop;
