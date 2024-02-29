import React from "react";
import { ICO_CROSS } from "../utils/constants";

const Popup = ({ setShow }: { setShow: any }) => {
  return (
    <div
      onClick={setShow}
      className="fixed top-0 left-0 bg-black/75 w-screen h-screen flex justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-auto p-4 bg-neutral-200 relative rounded-md w-4/5 h-4/5"
      >
        <h1 className="font-bold text-2xl">OUTPUT</h1>
        <div
          onClick={setShow}
          className="absolute right-2 top-2 rounded-full p-2 transition-all duration-300 hover:cursor-pointer hover:text-white hover:bg-black/75"
        >
          <ICO_CROSS />
        </div>
      </div>
    </div>
  );
};

export default Popup;
