import React, { useState } from "react";

import thumbnail from "../assets/thumbnail.avif";
import { Link } from "react-router-dom";
import { Bookmark } from "../assets/Icon";

export const SubBlog = ({ className, img, header, text,prop,imgClass }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <div
      className={`w-full flex flex-col items-center justify-center mb-4 ${className}`}
    >
      <div className={`w-full  bg-gray-200 flex items-center justify-center ${imgClass}`}>
        <img
          src={img}
          alt="image"
          className={`rounded-t-lg w-full h-full !object-cover transition-all ease-in-out  duration-200 hover:translate-y-1 `}
        />

      </div>
        <div className="bg-primary  rounded-b-lg py-2 px-2  w-full h-1/2  flex flex-col">
          <h3 className=" text-[#13343b] font-semibold py-1">{header}</h3>
          <p className="text-[#797977]">
            {text}
            {/* 72,376 qubits and 80 million quantum gates,
          far exceeding the capabilities of today's most advanced quantum
          computers. */}
          </p>
          {prop}
          <div className="flex my-3 justify-between w-full">
            <div className="flex items-center gap-2 ">
              <img
                src={thumbnail}
                alt="thumbnail"
                className=" rounded-full w-6 flex"
              />
              <p>elymc</p>
            </div>
            <div className="relative group inline-block w-fit">
              <div
                onClick={handleBookmark}
                className={` hover:text-general p-2 rounded-full hover:bg-[#e8e8e3] ease-in-out duration-300 transition-all ${
                  isBookmarked ? "text-general" : "text-[#686263]"
                }`}
              >
                <Bookmark width={20} height={20} />
              </div>
              <div>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-general text-white w-fit rounded-lg p-2">
                  Save to bookmark
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SubBlog 