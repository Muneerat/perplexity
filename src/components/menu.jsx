import React from 'react';
import { NavLink } from 'react-router-dom';
import { Art, Entertainment, Finance, Sport, Star, Tech } from '../assets/Icon';


const menus = [
  { name: 'Top', path: '/discover',img: <Star width={17} height={17}/> },
  { name: 'Tech & Science', path: '/',img: <Tech width={17} height={17}/> },
  { name: 'Finance', path: '/', img: <Finance width={17} height={17}/> },
  { name: 'Art & Culture', path: '/' ,img: <Art width={17} height={17}/> },
  { name: 'Sports', path: '/sports', img: <Sport width={17} height={17}/> },
  { name: 'Entertainment', path: '/' ,img: <Entertainment width={17} height={17}/> }
];

export const Menu = () => {
  return (
    <nav className="flex justify- font-medium  text-xs p-4 w-4/6 shadow-m sticky top-0 z-50 bg-white opacity-95 w-">
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-[#4896a0] bg-[#e5efec] rounded-lg flex gap-1"
              : "px-4 py-2 text-gray-700 hover:opacity-60 rounded-lg flex gap-1"
          }
        > 
          {menu.img}
          {menu.name}
        </NavLink>
      ))}
    </nav>
  );
};
