import React from "react";
import { SideBar } from "./sideBar";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
export const Layout = () => {
  return (
    <div className="bg-primary flex">
      <SideBar />
      <div className="bg-[#fff] w-full m-3 rounded-md ">
        <div className=" flex flex-col justify-start mx-auto ">
          <Navbar />
          <div className="w-full h-[1px] bg-[#e2e2e1]"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};