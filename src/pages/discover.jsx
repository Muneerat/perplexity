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
  let smallBlogIndex = 0;
  return (
    <div className=" max-w-5xl mx-auto w-full ">
      <Menu />
      <div className="flex gap-10">
        <div className="">
          {mediumBlogs.map((mediumBlog) => (
            <>
             <Link to={`/discover/${mediumBlog.id}`} key={mediumBlog.id}>
              <SubBlog
                img={mediumBlog.img}
                header={mediumBlog.header}
                text={mediumBlog.text}
                imgClass=''
              />
              </Link>
              <div className="md:flex gap-5 mb-5 items-center w-">
              {smallBlogs.slice(smallBlogIndex, smallBlogIndex+3).map((smallBlog ) => (
                <Link to={`/discover/${smallBlog.id}`} key={smallBlog.id}   className="w-full h-full object-cover text-xs p-0">
                  <SubBlog
                    img={smallBlog.img}
                    header={smallBlog.header}
                    text={textBlog(smallBlog.text, 50)}
                     imgClass='h-28'
                  ></SubBlog>
                </Link>
              ))}
            </div>
              
            </>
              
          ))}
        </div>
        <div>
          <MenuBox />
        </div>
        </div>
    </div>
  );
};

export default Discover;
