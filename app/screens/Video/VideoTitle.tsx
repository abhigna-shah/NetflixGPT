import React from "react";
import type { Movie } from "~/model/movie.model";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[10%] lg:pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold w-1/2">
        <div className="line-clamp-2">{title}</div>
      </h1>
      <p className="hidden xl:inline-block py-6 text-lg w-1/4">
        <span className="line-clamp-4">{overview}</span>
      </p>
      <div className="pt-2">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg md:text-xl rounded-md cursor-pointer hover:bg-white/70">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500/50 mx-2 text-white p-4 px-12 text-xl rounded-md cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
