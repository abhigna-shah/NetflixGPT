import React from "react";
import type { Movie } from "~/model/movie.model";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-md cursor-pointer hover:bg-white/70">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 mx-2 text-white p-4 px-12 text-xl rounded-md cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
