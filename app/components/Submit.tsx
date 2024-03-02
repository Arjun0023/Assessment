"use client";

import { useEffect, useState } from "react";
import { API, ICO_BACK } from "../utils/constants";
import Popup from "./Popup";
import Link from "next/link";

  const Submit = () => {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    const [sliderValue, setSliderValue] = useState(0);
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
  
    const fetchAPI = async () => {
      try {
        const inputString = `Check: ${checked}, Input Field: ${text}, Slider Value: ${sliderValue}`;
        const response = await fetch("https://videodubber.ai/testinput", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputstring: inputString }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("There was an error!", error);
        setError("There was an error processing your request.");
      }
    };
  return (
    <div className="flex flex-col justify-center md:items-end text-center p-4">
    <div className="w-fit p-2 rounded-full transition-all duration-300 hover:cursor-pointer hover:text-white hover:bg-black/75">
      <Link href="/">
        <ICO_BACK />
      </Link>
    </div>
    <div className="w-1/2 m-auto p-8">
      {error !== "" && <h1 className="font-bold text-red-700">{error}</h1>}
      {/* CHECKBOX */}
      <div className="form-control pt-4 py-2 rounded-lg bg-slate-500">
        <label className="label cursor-pointer">
          <span className="label-text">Checkbox</span>
          <input
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            type="checkbox"
            className="checkbox"
          />
        </label>
      </div>
      {/* INPUT FIELD */}
      <label className="mt-4 input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Textbox"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {/* SLIDER */}
      <input
        type="range"
        min={0}
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="range mt-4"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2  ">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
    <div className="flex items-center justify-center md:m-0 py-8 text-center">
      <button
        onClick={() => {
          if (text === "") {
            setError("Can't leave the input field empty.");
            return;
          }
          setError("");
          fetchAPI();
          setShow(true);
        }}
        className="btn mr-96 justify-center items-center" 
      >
        Submit
      </button>
    </div>
  
    {show && (
      <Popup
        data={{ checked: checked, text: text, sliderValue: sliderValue }}
        setShow={() => {
          setShow(false);
        }}
      />
    )}
  </div>
  
  );
};

export default Submit;