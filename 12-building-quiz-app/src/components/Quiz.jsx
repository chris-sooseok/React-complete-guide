import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Questions.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {


  const [userAnswers, setUserAnswers] = useState([]);
  
  // if answer is chosen, temporarilly set the length - 1
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}></Summary>
  }

  return (
    <div id="quiz">
      <Question 
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
