import React, { useContext } from "react";
import { QuizContext } from "./Helpers/Context";
import { useHistory } from "react-router-dom";
import quizzes from "./Helpers/Quizzes";
import "./EndScreen.css";

const EndScreen = (props) => {
  const quizId = props.match.params.quizId;
  const currentQuiz = quizzes.find((q) => q.id === quizId);
  const questions = currentQuiz.questions;
  const { score, setScore } = useContext(QuizContext);
  const history = useHistory();

  const restartQuiz = () => {
    setScore(0);
    history.push(`/quizzes/${quizId}`);
  };

  return (
    <div className="End">
      <h1>Quiz Finished</h1>
      <h3>Your Score:</h3>
      <h3>
        {" "}
        {score} / {questions.length}{" "}
      </h3>
      <div className="menu-buttons">
        <button onClick={() => history.push("/")}>Quizzes Menu</button>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;
