import { resource } from "../data/storage";

export default function ButtonForAnswer({ currentPage, givenAnswer, option }) {
  const actualAnswer = resource[currentPage].answer.option;
  return (
    <button
      className={
        option === actualAnswer
          ? " bg-[#94b394] min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg hover:shadow-[black] text-start break-words text-[black] text-2xl"
          : option === givenAnswer
          ? " bg-[#b67d7d] min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg hover:shadow-[black] text-start break-words text-[black] text-2xl"
          : " bg-[#3a3153] min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg hover:shadow-[black] hover:text-2xl text-start break-words text-[#fefdfd] text-xl"
      }
    >
      <label htmlFor={option}>{resource[currentPage].option[option]}</label>
    </button>
  );
}
