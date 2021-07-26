import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

const Session = ({ session, focusDuration, isTimerRunning, breakDuration }) => {
  return (
    <div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        {session && (
          <div>
            <div className="row mb-2">
              <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                <h2 data-testid="session-title">
                  {session?.label} for{" "}
                  {session.label === "Focusing"
                    ? minutesToDuration(focusDuration)
                    : minutesToDuration(breakDuration)}{" "}
                  minutes
                </h2>
                {/* TODO: Update message below to include time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(session?.timeRemaining)} remaining
                </p>
                {!isTimerRunning && <h2>PAUSED</h2>}
              </div>
            </div>

            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={
                      100 -
                      (100 * session.timeRemaining) /
                        (session.label === "Focusing"
                          ? focusDuration * 60
                          : breakDuration * 60)
                    } // TODO: Increase aria-valuenow as elapsed time increases
                    style={{
                      width: `${
                        100 -
                        (100 * session.timeRemaining) /
                          (session.label === "Focusing"
                            ? focusDuration * 60
                            : breakDuration * 60)
                      }%`,
                    }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Session;
