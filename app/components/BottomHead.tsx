import React from "react";
import { IMG_FEATURE, LIST } from "../utils/constants";

const BottomHead = () => {
  return (
    <div className="pb-20 grid grid-flow-row md:grid-flow-col md:grid-cols-12 item text-neutral-600 text-pretty">
      <div className="md:col-start-1 md:col-end-8 lg:col-end-7 flex items-start">
        <img className="px-4" alt="feature" src={IMG_FEATURE} />
      </div>
      <div className="m-4 md:m-0 md:col-start-8 md:col-end-13">
        <div className="rounded-lg mr-4 p-10 bg-white border-2 border-neutral-300">
          <h1 className="font-bold text-3xl md:text-4xl pb-10">
            How to create English subtitles for an French video?
          </h1>
          <ol className="list-inside list-decimal font-bold text-lg">
            {LIST.map((item, key) => (
              <li key={key} className="pb-4">
                {item.head}
                <p className="font-normal leading-tight">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BottomHead;
