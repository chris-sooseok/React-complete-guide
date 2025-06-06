import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  timeRemaining,
  onReset,
}) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <string> {formattedTimeRemaining} seconds left</string>
      </p>

      {/* built-in html feature that closes dialog */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

// import { forwardRef } from "react";
// const ResultModal = forwardRef(function ResultModal(
//   { result, targetTime },
//   ref
// ) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2> You {result} </h2>
//       <p>
//         The target Time was <strong>{targetTime} seconds.</strong>
//       </p>

//       {/* built-in html feature that closes dialog */}
//       <form action="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });

// export default ResultModal;
