import React from "react";

const Section = ({
  type,
  head,
  text,
  img,
}: {
  type: any;
  head: any;
  text: any;
  img: any;
}) => {
  return (
    <div className="my-auto grid grid-flow-row md:grid-flow-col md:grid-cols-12 text-left text-pretty mx-0 py-20 px-6 md:px-8 lg:px-20">
      {type === "l-r" ? (
        <>
          <div className="flex flex-col col-span-5">
            <p className="font-bold text-3xl lg:text-4xl">{head}</p>
            <p className="py-2 lg:text-lg">{text}</p>
          </div>
          <img className="w-full col-span-7 px-6 py-4" alt={head} src={img} />
        </>
      ) : (
        <>
          <img
            className="hidden md:block w-full col-span-7 px-6 py-4"
            alt={head}
            src={img}
          />
          <div className="flex flex-col col-span-5">
            <p className="font-bold text-3xl lg:text-4xl">{head}</p>
            <p className="py-2 lg:text-lg">{text}</p>
          </div>
          <img
            className="block md:hidden w-full col-span-7 px-6 py-4"
            alt={head}
            src={img}
          />
        </>
      )}
    </div>
  );
};

export default Section;
