import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer ">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </NavLink>
        <ul className="flex list-none items-center space-x-6  font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer list-none ${
                isActive ? "text-gray-400" : "text-black"
              }`
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink to={"/cart"} className={({ isActive }) => `cursor-pointer ${isActive?"text-gray-400":"text-black"}`}>
            <li>Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
