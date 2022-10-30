import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-[-1]">
      <div className=" shadow-xl">
        <div className=" flex justify-between items-center w-[90%] h-[7vh] m-auto">
          <Link href="/">
            <h1 className="text-2xl hover:border-b uppercase hover:cursor-pointer">
              Logo
            </h1>
          </Link>
          <div>
            <ul className=" justify-between gap-16 md:flex hidden">
              <Link href="/">
                <li className="hover:border-b uppercase hover:cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/map">
                <li className="hover:border-b uppercase hover:cursor-pointer">
                  Map
                </li>
              </Link>
              <Link href="/forecast">
                <li className="hover:border-b uppercase hover:cursor-pointer">
                  Forecast
                </li>
              </Link>
            </ul>
          </div>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div>
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[60%] sm:[75%] md:[45%] h-screen bg-white p-10 ease-in duration-500"
              : " fixed right-[-100%] top-0 w-[60%] sm:[75%] md:[45%] h-screen bg-white p-10 ease-in duration-500"
          }
        >
          <div className=" flex w-full items-center justify-between ">
            <h1 className=" text-2xl">Logo</h1>
            <div
              className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <ul>
              <Link href="/">
                <li className=" py-4 hover:border-b uppercase hover:cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/map">
                <li className=" py-4 hover:border-b uppercase hover:cursor-pointer">
                  Map
                </li>
              </Link>
              <Link href="/forecast">
                <li className=" py-4 hover:border-b uppercase hover:cursor-pointer">
                  Forecast
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
