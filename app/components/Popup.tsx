import React from "react";
import { ICO_CROSS } from "../utils/constants";

interface Data {
  id: string;
  job: string;
  name: string;
  salary: string;
}

const Popup = ({ setShow, data }: { setShow: any; data: any }) => {
  const { sliderValue, checked, text } = data;
  return (
    <div
  onClick={setShow}
  className="fixed top-0 left-0 bg-black/75 w-screen h-screen flex justify-center"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="m-auto p-4 bg-neutral-200 relative rounded-md w-4/5 h-4/5 text-center"
  >
    <h1 className="font-bold text-black text-2xl mt-44">OUTPUT</h1>
    <p className="pt-6">
      <b className="text-black">Check:</b> {checked ? "True" : "False"}
    </p>
    <p className="pt-6">
      <b  className="text-black">Input Field:</b> {text}
    </p>
    <p className="pt-6">
      <b className="text-black">Slider Value:</b> {sliderValue}
    </p>
    <div
      onClick={setShow}
      className="absolute right-2 top-2 rounded-full p-2 text-red-500  transition-all duration-300 hover:cursor-pointer hover:text-white hover:bg-black/75"
    >
      <ICO_CROSS />
    </div>
  </div>
</div>

  );
};

export default Popup;