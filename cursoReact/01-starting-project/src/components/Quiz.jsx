import DOMANDE from "../utilities/Questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Domanda from "./Question";
import { useState, useCallback } from "react";
import { css } from "styled-components";

const TIMER1 = 3000;
const TIMER2 = 2000;
const TIMER3 = 1000;

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const currentDomanda =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = currentDomanda === DOMANDE.length;

  const handleAnswer = useCallback(function handleAnswer(selectedAnswer) {
    setAnswerState("answered");
    setUserAnswers((prev) => [...prev, selectedAnswer]);
    setTimeout(() => {
      if (
        selectedAnswer === DOMANDE[currentDomanda].answerOptions[0].answerText
      ) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(setAnswerState(""), 2000);
    }, 1000);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswer(null);
  }, [handleAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg}></img>
        <h2>quiz complete</h2>
      </div>
    );
  }

  return (
    <section id="quiz">
      <Domanda
        key={currentDomanda}
        questionText={DOMANDE[currentDomanda].questionText}
        answers={DOMANDE[currentDomanda].answerOptions}
        onSelectAnswer={handleAnswer}
        answerState={answerState}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        onSkipAnswer={handleSkipAnswer}
      />
    </section>
  );
}
export default Quiz;
