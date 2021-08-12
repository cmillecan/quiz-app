import React, { useState, useContext, useEffect } from "react";
import quizzes from "./Helpers/Quizzes";
import { QuizContext } from "./Helpers/Context";
import { useHistory } from "react-router-dom";
import "./Quiz.css";

const Quiz = (props) => {
  const quizId = props.match.params.quizId;
  const currentQuiz = quizzes.find((q) => q.id === quizId);
  const history = useHistory();
  const { score, setScore } = useContext(QuizContext);
  const [currQ, setCurrQ] = useState(0);
  const [optionClicked, setOptionClicked] = useState("");
  const questions = currentQuiz.questions;

  useEffect(() => {
    setScore(0);
  }, [setScore]);

  const nextQuestion = () => {
    if (questions[currQ].answer === optionClicked) {
      setScore(score + 1);
    }
    setCurrQ(currQ + 1);
  };

  const finishQuiz = () => {
    if (questions[currQ].answer === optionClicked) {
      setScore(score + 1);
    }

    history.push(`/quizzes/${quizId}/endScreen`);
  };

  return (
    <div className="Quiz">
      <h1>{questions[currQ].prompt}</h1>
      <div className="options">
        <button
          onClick={() => {
            setOptionClicked("A");
          }}
        >
          {questions[currQ].optionA}
        </button>
        <button
          onClick={() => {
            setOptionClicked("B");
          }}
        >
          {questions[currQ].optionB}
        </button>
        <button
          onClick={() => {
            setOptionClicked("C");
          }}
        >
          {questions[currQ].optionC}
        </button>
        <button
          onClick={() => {
            setOptionClicked("D");
          }}
        >
          {questions[currQ].optionD}
        </button>
      </div>
      <div className="menu-buttons">
        <button onClick={() => history.push("/")}>Quiz Menu</button>
        {currQ === questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
