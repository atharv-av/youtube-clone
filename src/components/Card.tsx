import React from "react";
import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

function Card({ data }: { data: HomePageVideos }) {
  return (
    <div className="w-[23rem] h-60 flex gap-3 flex-col mb-6">
      <div className="relative">
        <span className="absolute bottom-1 right-[1.2rem] text-xs bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="h-48 w-[22rem] rounded-lg hover:rounded-none transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="w-[18.5rem] line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <span className="after:content-['•'] after:mx-1 text-sm text-gray-400">
              {data.videoViews}  views
            </span>
            <span className=" text-sm text-gray-400">{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
