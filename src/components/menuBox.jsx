import React from "react";
import { Art, Entertainment, Finance, Sport, Star, Tech } from '../assets/Icon';

  const menus = [
    { name: 'Tech & Science', path: '/',img: <Tech width={17} height={17}/> },
    { name: 'Finance', path: '/', img: <Finance width={17} height={17}/> },
    { name: 'Art & Culture', path: '/' ,img: <Art width={17} height={17}/> },
    { name: 'Sports', path: '/sports', img: <Sport width={17} height={17}/> },
    { name: 'Entertainment', path: '/' ,img: <Entertainment width={17} height={17}/> }
  ];

export const MenuBox = () => {
  return (
    <div className=" bg-primary rounded-lg py-2 px-4 w-5/6 md:block hidden">
      <div >
        <h1 className="text-lg font-medium text-general py-1">Make it yours</h1>
        <p className="py-1 text-[#757570]">
          Select topics and interests to customize your Discover experience
        </p>
      </div>
      <div className="flex flex-wrap border-b border-[#bbbbb8] my-1 py-1">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-[#21808d] hover:text-[#13343b]  bg-[#dfe7e4] p-2 pl-2 rounded-lg w-fit m-2 "
          >
            {menu.img}
            {menu.name}
          </div>
        ))}
      </div>
      <button className="bg-[#21808d] text-white rounded- rounded-full w-full p-2 my-4">Save Interest</button>
    </div>
  );
};
