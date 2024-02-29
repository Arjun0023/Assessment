import React from "react";
import GetStarted from "./GetStarted";
import Comment from "./Comment";

const Reviews = () => {
  return (
    <div className="grid grid-flow-row grid-cols-12 py-10 text-neutral-600">
      <div className="col-span-12 my-auto flex flex-col items-center justify-center text-pretty text-center mx-0 md:mx-4 lg:mx-8">
        <h1 className="font-bold text-3xl lg:text-4xl pb-6 lg:pb-12 text-black">
          Customer Reviews
        </h1>
        <h1 className="font-bold text-xl pb-6 lg:pb-12">
          Rated Excellent 4.8/5 based on 850+ reviews
        </h1>
      </div>
      <div className="col-span-12 md:col-start-2 md:col-end-12 flex flex-row">
        <Comment />
        <Comment />
      </div>
      <div className="col-span-12 md:col-start-2 md:col-end-12 flex flex-row">
        <Comment />
        <Comment />
      </div>
      <div className="col-span-12 my-8 flex flex-col items-center justify-center text-pretty text-center mx-0 md:mx-4 lg:mx-8">
        {/* BUTTON */}
        <GetStarted />
      </div>
    </div>
  );
};

export default Reviews;
