import React from "react";
import { ICO_HALF_STAR, ICO_STAR, IMG_FEATURE, LIST } from "../utils/constants";
import Comment from "./Comment";
import GetStarted from "./GetStarted";
import Reviews from "./Reviews";
import BottomHead from "./BottomHead";

const Bottom = () => {
  return (
    <>
      <BottomHead />
      {/* REVIEWS */}
      <Reviews />
    </>
  );
};

export default Bottom;
