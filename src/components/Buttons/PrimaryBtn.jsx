import React from "react";

function PrimaryBtn({ children,handleOpenModal,type }) {
  return <button type={type} onClick={handleOpenModal} className="py-2 font-semibold px-5 bg-primary/90 text-white rounded-lg text-sm cursor-pointer">{children}</button>;
}

export default PrimaryBtn;
