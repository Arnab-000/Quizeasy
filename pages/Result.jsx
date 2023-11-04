import { resource } from "../data/storage";
import { Link } from "react-router-dom";

export default function Result({ allAnswers }) {
  let userCorrect = 0;
  let correctAnswer = resource;

  allAnswers.map((givenAnswer, index) => {
    if (correctAnswer[index].answer.option === givenAnswer) {
      userCorrect++;
    }
  });

  let Percentage = (userCorrect / resource.length) * 100;
  return (
    <>
      <div className="w-[80vw] mt-[30vh] bg-[#5f43b2] flex flex-col items-center mx-auto p-4 gap-2 border rounded-lg">
        <h1 className=" text-white text-2xl mb-[5%]">
          Kon'nichiwa yūzā ( Hello User )
        </h1>
        <h2 className="text-[#fefdfd] text-xl">
          Total Question :{" "}
          <span className=" font-bold"> {resource.length} </span>
        </h2>
        <h2 className=" text-[#fefdfd] text-xl">
          Total Correct Answer :
          <span className=" font-bold"> {userCorrect} </span>
        </h2>
        <h2 className=" text-[#fefdfd] text-xl">
          Correction Percentage :
          <span className=" font-bold text-2xl"> {Percentage}% </span>
        </h2>
        {Percentage >= 70 && (
          <div>
            <h2 className=" text-[#dad3d3] text-2xl mt-[3%]">
              Ooooooo Aced it ! Congratulations \^.^/{" "}
            </h2>
          </div>
        )}
        {Percentage < 70 && (
          <div>
            <h2 className=" text-[#dad3d3] text-2xl mt-[3%]">
              Stay Strong and Come Back Dattebayoo ^.^
            </h2>
          </div>
        )}
        <div className="w-[80%] mx-auto flex justify-evenly ">
          <Link to="/">
            <button className=" bg-[#3a3153] p-4 w-32 border border-solid border-1 rounded text-white text-xl mt-[8%] hover:bg-[#5f43b2] hover:border-[2px]">
              Try Again
            </button>
          </Link>

          <Link to="/">
            <button className=" bg-[#3a3153] p-4 w-32 border border-solid border-1 rounded text-white text-xl mt-[4%] hover:bg-[#5f43b2] hover:border-[2px]">
              Answers
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
