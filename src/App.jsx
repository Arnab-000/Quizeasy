import Result from "../pages/Result";
import Question from "../pages/Question";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [allAnswers, setAllAnswer] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Question allAnswers={allAnswers} setAllAnswer={setAllAnswer} />
        }
      />
      <Route path="/result" element={<Result allAnswers={allAnswers} />} />
    </Routes>
  );
}

export default App;
