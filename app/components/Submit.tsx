"use client";

import { useEffect, useState } from "react";
import { API, ICO_BACK } from "../utils/constants";
import Popup from "./Popup";
import Link from "next/link";

const Submit = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState("0");

  //   SPACE
  const fetchAPI = async () => {
    // const inputString = `${checked ? true : false}${text}${sliderValue}`;
    // const inputString = "true " + "das" + "25";
    // console.log(inputString);
    try {
      // Make POST request using fetch
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ inputstring: inputString }),
        body: JSON.stringify({
          name: text,
          job: checked ? "leader" : "Employee",
          salary: sliderValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
      // Handle response as needed
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="flex flex-col justify-center md:items-end text-center p-4">
      <div className="w-fit p-2 rounded-full transition-all duration-300 hover:cursor-pointer hover:text-white hover:bg-black/75">
        <Link href="/">
          <ICO_BACK />
        </Link>
      </div>
      <div className="w-1/2 m-auto p-8">
        {/* CHECKBOX */}
        <div className="form-control pt-4">
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
          onChange={(e) => setSliderValue(e.target.value)}
          className="range mt-4"
          step="25"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
      <div className="m-auto md:m-0 py-8">
        <button
          onClick={() => {
            fetchAPI();
            setShow(true);
          }}
          className="btn"
        >
          Submit
        </button>
      </div>
      {show && (
        <Popup
          data={data}
          setShow={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

export default Submit;
