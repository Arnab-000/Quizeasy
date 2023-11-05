import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ userName, setUserName }) {
  function handleStart() {
    if (userName === null) {
      alert("Enter your name first");
      return;
    }
  }
  return (
    <div className="w-[80vw] mt-[30vh] bg-[#5f43b2] flex flex-col items-center mx-auto p-4 gap-2 border rounded-lg">
      <div className=" w-[80%] mx-auto my-2 min-h-[4.25rem] max-h-fit text-[#fefdfd] font-semibold text-4xl text-center">
        Enter your name to continue
      </div>
      <input
        type="text"
        className="w-[20%] p-3 font-semibold  text-xl"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      {userName ? ( // Render the Link if userName is truthy
        <Link to="/questions">
          <button
            className="bg-[#3a3153] p-4 w-32 border border-solid border-1 rounded text-white text-xl mt-[4%] hover:bg-[#5f43b2] hover:border-[2px]"
            onClick={handleStart}
          >
            Start
          </button>
        </Link>
      ) : (
        <button
          className="bg-[#3a3153] p-4 w-32 border border-solid border-1 rounded text-white text-xl mt-[4%] cursor-not-allowed"
          onClick={handleStart}
        >
          Start
        </button>
      )}
    </div>
  );
}
