import Timer from "./QuestionTimer";
import Answers from "./Answers";
export default function Domanda({
    
    questionText,answers,onSelectAnswer,selectedAnswers,answerState,
onSkipAnswer
}) {
  return (
    <section id="question">
      <Timer
        timeout={10000}
        onTimeout={onSkipAnswer}
      ></Timer>
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswers={selectedAnswers}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </section>
  );
}
