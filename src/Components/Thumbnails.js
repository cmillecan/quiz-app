import React, { useContext } from "react";
import { QuizContext } from "./Helpers/Context";
import "./Thumbnail.css";
import { NavLink } from "react-router-dom";

const Thumbnail = ({ id, onClick, title }) => {
  return (
    <NavLink to={`/quizzes/${id}`} className="quiz-thumbnail" onClick={onClick}>
      {title}
    </NavLink>
  );
};

const Thumbnails = ({ quizzes }) => {
  return (
    <div className="quiz-thumbnails-container">
      {quizzes.map(({ title, id }) => (
        <Thumbnail key={id} id={id} title={title} />
      ))}
    </div>
  );
};

export default Thumbnails;
