import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Discover, HomeIcon, Library, Logo } from "../assets/Icon";

export const SideBar = () => {
  return (
    <nav className="px-6 py-3 w-[40%] max-w-64 w- w- h-screen  overflow-y-auto scrollbar-thin sticky top-0 hidden md:flex justify-between flex-col">
      <div>
        <div className=" text-general fill-general">

        <Logo height={50} width={130} />
        </div>
        <div className="text-secondary bg-[#fff] px-3 py-2  border-[#f0f0ea] border rounded-full cursor-pointer hover:border-general flex my-1">
          <h4 className="font-medium">New Thread</h4>
          <span className="border border-[#f0f0ea] rounded px-1 py-1 mx-1 h-5 flex justify-center  items-center font-light">
            Ctrl
          </span>
          <span className="border border-[#f0f0ea] rounded px-1 py-1 mx-1 h-5 flex justify-center items-center font-light">
            I
          </span>
        </div>
        <ul className="my-4 text-lg">
          <li>
            <Link
              className="flex items-center gap-1 text-secondary hover:text-[#13343b] w-full hover:bg-[#ece6e8] p-2 pl-2 rounded-md"
              to="/"
            >
              <HomeIcon height={20} width={17} /> Home
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 text-secondary hover:text-[#13343b] w-full hover:bg-[#ece6e8] p-2 pl-2 rounded-md my-1"
              to="/discover"
            >
              <Discover height={20} width={17} /> Discover
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 text-secondary hover:text-[#13343b] w-full hover:bg-[#ece6e8] p-2 pl-2 rounded-md"
              to="/"
            >
              <Library height={20} width={17} /> Library
            </Link>
          </li>
        </ul>
        <div className="border text-[#ababa6] border-[#d3d3ce] border-dashed p-5 rounded-md ">
          <span>Library disabled while incognito</span>
        </div>
      </div>
      <div>
        <p className=" text-general font-medium">Try Pro</p>
        <div className="text-secondary">
          Upgrade for image upload, smarter AI, and more Pro Search.
        </div>
        <Link className="flex items-center gap-2 bg-[#e8e8e3] text-general w-fit p-2 rounded-md">
          <ArrowUp width={15} height={15} /> Learn More
        </Link>
        <div className=""></div>
      </div>
    </nav>
  );
};
