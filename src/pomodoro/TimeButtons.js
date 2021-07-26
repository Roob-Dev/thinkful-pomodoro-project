import React from "react";
import { minutesToDuration } from "../utils/duration";

const TimeButtons = ({
  setFocusDuration,
  setBreakDuration,
  focusDuration,
  session,
  breakDuration,
}) => {
  const handleFocusDecrease = () => {
    // if (focusDuration > 5)
    setFocusDuration((currentDuration) => Math.max(5, currentDuration - 5));
  };

  const handleFocusIncrease = () => {
    // if (focusDuration < 60)
    setFocusDuration((currentDuration) => Math.min(60, currentDuration + 5));
  };

  const handleBreakDecrease = () => {
    setBreakDuration((currentDuration) => Math.max(1, currentDuration - 1));
  };

  const handleBreakIncrease = () => {
    setBreakDuration((currentDuration) => Math.max(1, currentDuration + 1));
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleFocusDecrease}
              disabled={session || focusDuration <= 5}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleFocusIncrease}
              disabled={session || focusDuration >= 60}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleBreakDecrease}
                disabled={session || breakDuration <= 1}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleBreakIncrease}
                disabled={session || breakDuration >= 15}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeButtons;
