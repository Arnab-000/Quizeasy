import { resource } from "../data/storage";
import { useState } from "react";
import ButtonForAnswer from "../components/ButtonForAnswer";
import { Link } from "react-router-dom";

export default function Answer({ allAnswers, setAllAnswer }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalQuestion = resource.length;
  if (allAnswers.length <= 0) {
    allAnswers = [];
    alert("Go give the quiz first");
    return null;
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleFinish = () => {
    setAllAnswer([]);
  };
  

  return (
    <>
      <div className="w-[80vw] mt-[30vh] bg-[#5f43b2] flex flex-col items-center mx-auto p-4 gap-2 border rounded-lg">
        <div className=" w-[80%] mx-auto my-2 min-h-[4.25rem] max-h-fit text-[#fefdfd] font-semibold text-4xl">
          Q. {resource[currentPage].question}
        </div>

        <div className="w-[80%] mx-auto grid gap-2 h-fit grid-cols-1 lg:grid-cols-2">
          <ButtonForAnswer
            currentPage={currentPage}
            givenAnswer={allAnswers[currentPage]}
            option={"A"}
          />
          <ButtonForAnswer
            currentPage={currentPage}
            givenAnswer={allAnswers[currentPage]}
            option={"B"}
          />
          <ButtonForAnswer
            currentPage={currentPage}
            givenAnswer={allAnswers[currentPage]}
            option={"C"}
          />
          <ButtonForAnswer
            currentPage={currentPage}
            givenAnswer={allAnswers[currentPage]}
            option={"D"}
          />
        </div>

        <div className="w-[80%] mx-auto flex justify-evenly ">
          {currentPage + 1 < totalQuestion && (
            <button
              className=" bg-[#3a3153] p-4 w-32 border border-solid border-1 rounded text-white text-xl mt-[4%] hover:bg-[#5f43b2] hover:border-[2px]"
              onClick={handleNext}
            >
              Next
            </button>
          )}

          {currentPage + 1 === totalQuestion && (
            <Link to="/">
              <button
                className=" bg-[#a37cf0] p-4 w-32 border border-solid border-1 rounded text-black text-2xl mt-[4%] hover:bg-[#5f43b2] hover:border-[2px] hover:text-white"
                onClick={handleFinish}
              >
                Finish
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
