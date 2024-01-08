import { useRef } from "react";

export default function Answers({answers,selectedAnswers,answerState,onSelect}){
  const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }
return(

    <ul id="answers">
    {shuffledAnswers.current.map((option, idx) => {
        console.log(selectedAnswers)
      const isSelected = selectedAnswers === option.answerText;
      {/* console.log(userAnswers[userAnswers.length - 1],option.answerText,answerState) */}
      let cssClass = ``;
      {/* console.log(answerState,isSelected) */}
      if (answerState === "answered" && isSelected) {
        cssClass = "selected";
      }
      if (
        (answerState === "correct" || answerState === "wrong") &&
        isSelected
      ) {
        cssClass = answerState;
      }
      {
        /* console.log(cssClass,answerState,option.answerText,isSelected) */
      }

      return (
        <li key={option.answerText} className="answer">
          <button
            onClick={() => onSelect(option.answerText)}
            className={cssClass}
          >
            {option.answerText}
          </button>
        </li>
      );
    })}
  </ul>

)


}