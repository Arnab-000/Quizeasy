import { useState } from "react";
import { resource } from "../data/storage";
import ButtonForOption from "../src/ButtonForOption";
import { Link } from "react-router-dom";

function Question({ allAnswers, setAllAnswer }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSelected, setCurrentSelected] = useState(null);
  const [currentAns, setCurrentAns] = useState(null);
  const totalQuestion = resource.length;

  const handleSubmit = () => {
    if (currentAns === null) {
      alert("Select an Option First baby! ~.~");
      return;
    }
    setAllAnswer([...allAnswers, currentAns]);
    setCurrentAns(null);
  };

  const handleNext = () => {
    console.log("In next ", currentAns);
    if (currentAns === null) {
      alert("Select an Option First baby! ~.~");
      return;
    }
    setCurrentPage(currentPage + 1);
    setCurrentSelected(null);
    setCurrentAns(null);
    setAllAnswer([...allAnswers, currentAns]);
  };

  return (
    <>
      <div className="w-[80vw] mt-[30vh] bg-[#5f43b2] flex flex-col items-center mx-auto p-4 gap-2 border rounded-lg">
        <div className=" w-[80%] mx-auto my-2 min-h-[4.25rem] max-h-fit text-[#fefdfd] font-semibold text-4xl">
          Q. {resource[currentPage].question}
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-2 gap-2 h-fit">
          <ButtonForOption
            optionNo="A"
            currentSelected={currentSelected}
            currentPage={currentPage}
            setCurrentSelected={setCurrentSelected}
            setCurrentAns={setCurrentAns}
          />
          <ButtonForOption
            optionNo="B"
            currentSelected={currentSelected}
            currentPage={currentPage}
            setCurrentSelected={setCurrentSelected}
            setCurrentAns={setCurrentAns}
          />
          <ButtonForOption
            optionNo="C"
            currentSelected={currentSelected}
            currentPage={currentPage}
            setCurrentSelected={setCurrentSelected}
            setCurrentAns={setCurrentAns}
          />
          <ButtonForOption
            optionNo="D"
            currentSelected={currentSelected}
            currentPage={currentPage}
            setCurrentSelected={setCurrentSelected}
            setCurrentAns={setCurrentAns}
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
            <Link to="/result">
              <button
                className=" bg-[#a37cf0] p-4 w-32 border border-solid border-1 rounded text-black text-2xl mt-[4%] hover:bg-[#5f43b2] hover:border-[2px] hover:text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Question;
