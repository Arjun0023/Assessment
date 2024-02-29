import React from "react";
import { ICO_HALF_STAR, ICO_STAR } from "../utils/constants";

const Comment = () => {
  return (
    <div className="w-1/2 m-4 px-8 p-4 rounded-lg bg-white border-2 border-neutral-300">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Simple and effective</h1>
        <div className="text-yellow-400 flex flex-row">
          {Array(5)
            .fill(null)
            .map((_, index) =>
              index === 4 ? (
                <ICO_HALF_STAR key={index} />
              ) : (
                <ICO_STAR key={index} />
              )
            )}
        </div>
      </div>
      <p className="py-4 font-medium">
        So, so simple to use. Every imaginable option for accurate
        transcription. Has enabled me to create a uniqueness about our new app.
      </p>
      <p className="pt-6">Dariusz Dłużeń - Trustpilot</p>
    </div>
  );
};

export default Comment;
