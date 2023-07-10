import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Button from "../components/Button";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/shop" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(Links[0].name);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl pt-2 text-orange-600">B</span>
          <span className="text-3xl text-indigo-600 pt-2">etachops</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-black absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[60px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className={`md:ml-8 text-md md:my-0 my-7 font-[nunito] ${
                activeLink === link.name ? "bg-gray-200" : ""
              }`}
            >
              <Link href={link.link}>
                <div
                  title={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
          <div className="flex ml-8 space-x-8">
            <Button>
              <Link href="/">SIGN IN</Link>
            </Button>
            <Button>
              <Link href="/">SIGN UP</Link>
            </Button>
          </div>
          <div className="text-black text-3xl md:px-6 py-4">
            <AiOutlineShoppingCart />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
