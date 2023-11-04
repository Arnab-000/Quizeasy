import { resource } from "../data/storage";

function ButtonForOption({
  optionNo,
  currentSelected,
  currentPage,
  setCurrentSelected,
  setCurrentAns,
}) {
  return (
    <button
      className={
        currentSelected === optionNo
          ? " bg-[#b1aebb] min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg hover:shadow-[black] text-start break-words text-[black] text-2xl"
          : " bg-[#3a3153] min-h-[3.125rem] p-2 space-x-2 hover:shadow-lg hover:shadow-[black] hover:text-2xl text-start break-words text-[#fefdfd] text-xl"
      }
      onClick={() => {
        setCurrentSelected(optionNo);
        setCurrentAns(optionNo);
      }}
    >
      <input
        type="radio"
        name="same"
        id={optionNo}
        value=""
        onChange={() => {
          setCurrentSelected(optionNo);
          setCurrentAns(optionNo);
        }}
        checked={currentSelected === optionNo}
      />
      <label htmlFor={optionNo}>{resource[currentPage].option[optionNo]}</label>
    </button>
  );
}

export default ButtonForOption;
