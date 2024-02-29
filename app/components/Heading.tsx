import {
  LANDING_BG1,
  ICO_HALF_STAR,
  ICO_STAR,
  IMG_TROPHY1,
  IMG_TROPHY2,
  LANDING_BG2,
  IMG_CMP,
} from "../utils/constants";

import Link from "next/link";
import GetStarted from "./GetStarted";

const Heading = () => {
  return (
    <>
      <div className="grid grid-flow-col py-4 md:py-8 lg:px-14 text-neutral-600">
        <img
          className="lg:min-w-20 lg:max-w-56 hidden md:block"
          alt="landing bg1"
          src={LANDING_BG1}
        />
        <div className="my-auto flex flex-col items-center justify-center text-pretty text-center mx-0 md:mx-4 lg:mx-8">
          <p className="font-bold text-5xl lg:text-7xl">
            French video with English subtitles
          </p>
          <p className="px-28 py-8 text-lg">
            Want your videos to reach a wider audience who speaks English? This
            service is ideal for your audiovisual content - from online videos,
            television shows, films, documentaries, marketing content and more!
          </p>
          <GetStarted />
          <div className="flex flex-row py-8">
            <img className="w-28" alt="Trophy1" src={IMG_TROPHY1} />
            <img className="w-28" alt="Trophy2" src={IMG_TROPHY2} />
          </div>
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
          <p className="pt-4 pb-8">
            Rated <b>4.8/5</b> based on 850+ reviews
          </p>
          <p className="pt-8">
            Trusted by 100,000+ users and teams of all sizes.
          </p>
        </div>
        <img
          className="lg:min-w-20 lg:max-w-56 hidden md:block"
          alt="landing bg2"
          src={LANDING_BG2}
        />
      </div>
      <div className="text-yellow-400 grid grid-flow-col items-center mx-14 lg:mx-56">
        {IMG_CMP.map((name) => (
          <img className="px-2 lg:w-36" key={name} alt={name} src={name} />
        ))}
      </div>
    </>
  );
};

export default Heading;
