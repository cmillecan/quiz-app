import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import QuizMenu from "./Components/QuizMenu";
import Navbar from "./Components/Navbar";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Components/Helpers/Context";
import EndScreen from "./Components/EndScreen";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <QuizContext.Provider value={{ score, setScore }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={QuizMenu} />
            <Route path="/quizzes/:quizId" exact component={Quiz} />
            <Route
              path="/quizzes/:quizId/endScreen"
              exact
              component={EndScreen}
            />
          </Switch>
        </QuizContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
