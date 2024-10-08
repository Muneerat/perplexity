import React from "react";
import { SideBar } from "../components/sideBar";
import { Menu } from "../components/menu";
import { SubBlog } from "../components/subBlog";
import quantum from "../assets/quantum.png";
import { MenuBox } from "../components/menuBox";
import { Link } from "react-router-dom";
import smallBlogs from "../Data/blog";


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
        <Link to={`/discover/10`} key={1}>
          <SubBlog
            img={quantum}
            header="Quantum Computer Doom Challenge"
            text="According to PC Gamer, the quantum computer adaptation of the iconic
            game DOOM, known as Quandoom, faces significant technical challenges
            due to its requirement fo.."
          />
          </Link>
          <div className="md:flex flex-col md:flex-row">
            {smallBlogs.map((smallBlog, index) => (
              <Link to={`/discover/${index}`} key={index}   className="md:w-[31%] text-xs p-0">
                <SubBlog
                  img={quantum}
                  header={smallBlog.header}
                  text={textBlog(smallBlog.text, 50)}
                ></SubBlog>
              </Link>
            ))}
          </div>
          <SubBlog
            img={quantum}
            header="Quantum Computer Doom Challenge"
            text="According to PC Gamer, the quantum computer adaptation of the iconic
            game DOOM, known as Quandoom, faces significant technical challenges
            due to its requirement fo.."
          />
          <div className="md:flex gap-2 w-fit">
            {smallBlogs.map((smallBlog, index) => (
              <SubBlog
                key={index}
                img={quantum}
                header={smallBlog.header}
                text={textBlog(smallBlog.text, 50)}
                className="md:w-[13%] text-xs p-0"
              ></SubBlog>
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
