import React from "react";
import { SideBar } from "../components/sideBar";
import { Menu } from "../components/menu";
import { SubBlog } from "../components/subBlog";
import quantum from "../assets/quantum.png";

const smallBlogs = [
  { img: 'Top',header: 'Quantum Computer Doom Challenge', text: 'According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.' },
  { img: 'Top',header: 'Quantum Computer Doom Challenge', text: 'According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.' },
  { img: 'Top',header: 'Quantum Computer Doom Challenge', text: 'According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.' },
];
const textBlog = (text,maxLength) =>{
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export const Discover = () => {
  return (
    <div>
      <Menu />
      <SubBlog
        img={quantum}
        header="Quantum Computer Doom Challenge"
        text="According to PC Gamer, the quantum computer adaptation of the iconic
            game DOOM, known as Quandoom, faces significant technical challenges
            due to its requirement fo.."
      />
      <div className="md:flex gap-2">
      { smallBlogs.map((smallBlog, index) => (
       <SubBlog
         key={index}
         img={quantum}
         header={smallBlog.header}
         text={textBlog(smallBlog.text,50)}
         className='md:w-[13%] text-xs p-0'
       >

       </SubBlog>
     ))}
      </div>
      <SubBlog
        img={quantum}
        header="Quantum Computer Doom Challenge"
        text="According to PC Gamer, the quantum computer adaptation of the iconic
            game DOOM, known as Quandoom, faces significant technical challenges
            due to its requirement fo.."
      />
      <div className="md:flex gap-2">
      { smallBlogs.map((smallBlog, index) => (
       <SubBlog
         key={index}
         img={quantum}
         header={smallBlog.header}
         text={textBlog(smallBlog.text,50)}
         className='md:w-[13%] text-xs p-0'
       >

       </SubBlog>
     ))}
      </div>
   
    </div>
  );
};
