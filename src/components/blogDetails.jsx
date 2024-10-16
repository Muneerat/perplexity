import React from "react";
import { useParams } from "react-router-dom";
import smallBlogs, { allBlogs } from "../Data/blog";
import { SubBlog } from "./subBlog";
import thumbnail from "../assets/thumbnail.avif";
import { Bookmark, Eyes, Share, Time } from "../assets/Icon";
import Toggle from "./toggle";
import favicon1 from "../assets/faviconV1.png"

export const BlogDetails = () => {
  const { id } = useParams();
  const blog = allBlogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="mx-16 mt-5">
        <div
          className={`w-[90%] p-2 flex flex-col items-center justify-center `}
        >
          <img
            src={blog.img}
            alt="image"
            className="rounded-t-lg w-full  object-fill object- object-center"
          />
          <div className="flex">
            <div className="bg- rounded-b-lg py-2 px-2">
              <h3 className=" text-[#13343b] text-4xl font-medium py-3">
                {blog.header}
              </h3>

              <div className="flex my-3 justify-between w-full text-[#797977]">
                <div className="flex items-center gap-2 ">
                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className=" rounded-full w-9 flex"
                  />
                  <div className="text-sm text-[#797977]">
                    <p>Curated by elymc</p>
                    <span>2 min read</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center gap-1">
                    <Time width={15} height={15} /> 8 day ago
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Eyes width={15} height={15} /> 46,134
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Share width={15} height={15} /> 2,278
                  </div>
                </div>
              </div>
              <p className="text-[#2c494f]">
                {blog.text}
                72,376 qubits and 80 million quantum gates, far exceeding the
                capabilities of today's most advanced quantum computers.
              </p>

              <div className="flex gap-4 text-sm">
                <div className="bg-primary text-[#13343b] rounded-lg p-2">
                  <h1 className="font-medium">
                  'DOOM' is finally being ported to quantum computers, but there are ...
                  </h1>
                  <div className="flex items-center gap-2 ">
                    <img
                      src={favicon1}
                      alt="favicon1"
                      className=" rounded-full w-6 flex"
                    />
                    <p>cnbc . 1</p>
                  </div>
                </div>
                <div className="bg-primary text-[#13343b] rounded-lg p-2">
                  <p>
                  'DOOM' is finally being ported to quantum computers, but there are ...
                  </p>
                  <div className="flex items-center gap-2 ">
                    <img
                      src={favicon1}
                      alt="favicon1"
                      className=" rounded-full w-6 flex"
                    />
                    <p>cnbc . 1</p>
                  </div>
                </div>
                <div className="bg-primary text-[#13343b] rounded-lg">
                  <p>
                    Taiwan's energy crunch could throw a wrench in to global
                    chip industry
                  </p>
                  <div className="flex items-center gap-2 ">
                    <img
                      src={thumbnail}
                      alt="thumbnail"
                      className=" rounded-full w-6 flex"
                    />
                    <p>cnbc . 1</p>
                  </div>
                </div>
                <div className="bg-primary text-[#13343b] rounded-lg">
                  <p>
                    Taiwan's energy crunch could throw a wrench in to global
                    chip industry
                  </p>
                  <div className="flex items-center gap-2 ">
                    <img
                      src={thumbnail}
                      alt="thumbnail"
                      className=" rounded-full w-6 flex"
                    />
                    <p>cnbc . 1</p>
                  </div>
                </div>
              </div>

              {/* Chat bot */}
              <div className="sticky flex items-center justify-center bottom-10 w-full  rounded-full bg-[#f3f3ee]">
                <div className=" sticky flex items-center bottom-10 justify-center border border-[#e7e7e6] text-[#797977] shadow-md w-full  rounded-full m-2 bg-white">
                  <input
                    placeholder="Ask follow-up"
                    className=" focus:outline-none p-5 w-[80%]  rounded-full"
                  />
                  <div className="flex items-center gap-4">
                    <div>
                      <Toggle />
                    </div>
                    <h1 className="font-medium">Pro</h1>
                    <div className="h-10 bg-[#f3f3ee] w-10 rounded-full  flex justify-center items-center">
                      <Share width={18} height={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>Introduction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
