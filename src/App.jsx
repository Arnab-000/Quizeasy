import Result from "../pages/Result";
import Question from "../pages/Question";
import Answer from "../pages/Answer";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState(null);
  const [allAnswers, setAllAnswer] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/questions"
          element={
            <Question allAnswers={allAnswers} setAllAnswer={setAllAnswer} />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              allAnswers={allAnswers}
              userName={userName}
              setUserName={setUserName}
              setAllAnswer={setAllAnswer}
            />
          }
        />
        <Route
          path="/answer"
          element={
            <Answer allAnswers={allAnswers} setAllAnswer={setAllAnswer} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
