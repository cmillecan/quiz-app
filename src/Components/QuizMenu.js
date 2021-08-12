import "../App.css";
import React, { useEffect, useState } from "react";
import "./QuizMenu.css";
import Thumbnails from "./Thumbnails";
import quizzes from "./Helpers/Quizzes";

function QuizMenu() {
  return (
    <div className="quiz-home">
      <h1>Quiz Menu</h1>
      <div className="quiz-menu-container">
        <Thumbnails quizzes={quizzes} />
      </div>
    </div>
  );
}

export default QuizMenu;
