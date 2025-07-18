import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
/*
* * handleStart activates interval which uniformly deducts time
* * handleStop deactivates interval and prompt dialog open
* **/

// ! This way, the variable is shared across all TimerChallenge components
// let timer

export default function TimerChallenge({ title, targetTime }) {
  // ? ref is not reset on every render nor not shared across all components
  const timer = useRef();

  // ? assigning the value to ref={...} React puts a DOM node in .current
  // ? so we can use it to access the dialog element and call its showModal() method
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // ? check if timer is running
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  // ? passed to ResultModal and called when ResultModal page is closed
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // ? deduct remaining time every 10 ms
  function handleStart() {
    // ? set TimerExpired to true after targetTime seconds
    timer.current = setInterval(
      () => {
        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      },
      10 // 10 milliseconds
    );
  }

  // ? when stop is pressed
  function handleStop() {
    // ! this open method is defined in useImperativeHandle in ResultModal
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          timeRemaining={timeRemaining}
          onReset={handleReset}
        />
      }
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running...!" : "Timer inactive."}
        </p>
      </section>
    </>
  );
}
