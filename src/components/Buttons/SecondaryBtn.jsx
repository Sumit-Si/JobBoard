import { useJob } from "../../context";

function SecondaryBtn({ children, handleClick,disabled}) {
 
  return (
    <button
      onClick={handleClick} 
      disabled={disabled}
      className={`py-2 font-semibold px-5 ${
        children === "Active" ? "bg-success/70" : "bg-base-200"
      } rounded-lg text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-base-300/80 disabled:text-base-content/50`}
    >
      {children}
    </button>
  );
}

export default SecondaryBtn;
