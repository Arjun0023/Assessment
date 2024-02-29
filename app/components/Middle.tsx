import React from "react";
import { IMG_FEATURE, IMG_FEATURES } from "../utils/constants";
import Section from "./Section";
import Link from "next/link";
import GetStarted from "./GetStarted";

const Middle = () => {
  return (
    <div className="grid grid-flow-col py-20 md:py-40 text-neutral-600">
      <div className="my-auto flex flex-col items-center justify-center text-pretty text-center mx-0 md:mx-4 lg:mx-8">
        <h1 className="font-bold text-3xl lg:text-4xl pb-6 lg:pb-12">
          Features
        </h1>
        <img className="py-4 pb-12 px-24" alt="feature" src={IMG_FEATURE} />
        {IMG_FEATURES.map((item, index) => (
          <Section
            key={index}
            type={item.type}
            head={item.head}
            text={item.text}
            img={item.img}
          />
        ))}
        <GetStarted />
      </div>
    </div>
  );
};

export default Middle;
