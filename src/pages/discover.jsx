import React from "react";
import { SideBar } from "../components/sideBar";
import { Menu } from "../components/menu";
import { SubBlog } from "../components/subBlog";
import quantum from "../assets/quantum.png";
import { MenuBox } from "../components/menuBox";
import { Link } from "react-router-dom";
import smallBlogs, { mediumBlogs } from "../Data/blog";


const textBlog = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const Discover = () => {
  return (
    <div className=" max-w-6xl mx-auto w-full h-full ">
      <Menu />
      <div className="flex">
        <div className="w-full">
          {mediumBlogs.map((mediumBlog) => (
              <Link to={`/discover/${mediumBlog.id}`} key={1}>
              <SubBlog
                img={mediumBlog.img}
                header={mediumBlog.header}
                text={mediumBlog.text}
              />
              </Link>
          ))}
      
          <div className="md:flex flex-col md:flex-row">
            {smallBlogs.map((smallBlog) => (
              <Link to={`/discover/${smallBlog.id}`} key={smallBlog.id}   className="md:w-[31%] text-xs p-0">
                <SubBlog
                  img={smallBlog.img}
                  header={smallBlog.header}
                  text={textBlog(smallBlog.text, 50)}
                ></SubBlog>
              </Link>
            ))}
          </div>
       
        </div>
        <div>
          <MenuBox />
        </div>
      </div>
    </div>
  );
};

export default Discover;
