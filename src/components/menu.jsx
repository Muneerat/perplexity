import React from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
  { name: 'Top', path: '/discover' },
  { name: 'Tech & Science', path: '/' },
  { name: 'Finance', path: '/' },
  { name: 'Art & Culture', path: '/' },
  { name: 'Sports', path: '/sports' },
  { name: 'Entertainment', path: '/' }
];

export const Menu = () => {
  return (
    <nav className="flex justify- font-medium  text-xs p-4 w-4/6">
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-[#4896a0] bg-[#e5efec] rounded-lg"
              : "px-4 py-2 text-gray-700 hover:opacity-60 rounded-lg"
          }
        >
          {menu.name}
        </NavLink>
      ))}
    </nav>
  );
};
