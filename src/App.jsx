import { useState } from "react";
import { resource } from "../data/storage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSelected, setCurrentSelected] = useState(null);

  return (
    <>
      <div className="w-[80vw] bg-orange-400 flex flex-col items-center mx-auto p-2 gap-2">
        <div className=" w-[80%] mx-auto my-2 min-h-[6.25rem] max-h-fit">
          {resource[currentPage].question}
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-2 gap-2 h-fit">
          <section
            className={
              currentSelected === "A"
                ? " bg-red-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
                : " bg-green-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
            }
          >
            <input
              type="radio"
              name="same"
              id="A"
              value=""
              onClick={() => {
                setCurrentSelected("A");
              }}
            />
            <label htmlFor="A">{resource[currentPage].option.A}</label>
          </section>

          <section
            className={
              currentSelected === "B"
                ? " bg-red-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
                : " bg-green-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
            }
          >
            <input
              type="radio"
              name="same"
              id="B"
              value=""
              onClick={() => {
                setCurrentSelected("B");
              }}
            />
            <label htmlFor="B">{resource[currentPage].option.B}</label>
          </section>

          <section
            className={
              currentSelected === "C"
                ? " bg-red-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
                : " bg-green-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg break-words"
            }
          >
            <input
              type="radio"
              name="same"
              id="C"
              value=""
              onClick={() => {
                setCurrentSelected("C");
              }}
            />
            <label htmlFor="C">{resource[currentPage].option.C}</label>
          </section>

          <button
            className={
              currentSelected === "D"
                ? " bg-red-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg text-start break-words"
                : " bg-green-300 min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg text-start break-words"
            }
            onClick={() => {
              setCurrentSelected("D");
            }}
          >
            <input
              type="radio"
              name="same"
              id="D"
              value=""
              onClick={() => {
                setCurrentSelected("D");
              }}
              checked={currentSelected === "D"}
            />
            <label htmlFor="D">{resource[currentPage].option.D}</label>
          </button>
        </div>

        <div className="w-[80%] mx-auto flex justify-evenly">
          <button
            className=" bg-lime-600 p-4 w-32 border border-solid border-1 rounded "
            onClick={(e) => console.log(e)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
