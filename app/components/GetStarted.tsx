"use client";

import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <Link href="/submit">
        <button className="rounded-lg bg-blue-600 px-12 py-5 font-bold text-white text-xl transition-all duration-300 hover:bg-blue-700">
          Get Started
        </button>
      </Link>
    </>
  );
};

export default GetStarted;
