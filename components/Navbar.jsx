/** @format */

import Image from "next/image";
import LogoLg from "./LogoLg";
import Link from "next/link";
import react, { useState } from "react";
import {
  AiOutlineMenu,
  CgMenuRight,
  MdOutlineClose,
  CgClose,
} from "react-icons/cg";

import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
// import { useState } from "react/cjs/react.production.min";
// import Lo

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-10 bg-[#e5e7eb] mt-0 md:px-20">
      <div className="flex justify-between items-center w-full h-full container mx-auto">

        <LogoLg />



        <ul className="hidden md:flex items-center">
          <Link href="about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>{" "}
          <Link href="events">
            <li className="ml-10 text-sm uppercase hover:border-b">Events</li>
          </Link>{" "}
          <Link href="experience">
            <li className="ml-10 text-sm uppercase hover:border-b">
              Experience
            </li>
          </Link>{" "}
          <Link href="joinComm">
            <button className="ml-10 text-[10px] uppercase shadow-none hover:shadow-xl text-white p-2 bg-orange-400 font-bold rounded-full">
              Join Community
            </button>
          </Link>
        </ul>

        <div onClick={handleClick} className="md:hidden cursor-pointer ">
          <CgMenuRight size={30} />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-50 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500 "
          }>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/images/osca-logo.png"
              alt="/"
              height={100}
              width={100}
            />

            <div
              onClick={handleClick}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <CgClose size={25} />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4">
            <p className="py-4">Lets build something legendary together</p>
          </div>

          <ul className="uppercase">
            <Link href="about" >
              <li className="py-4 text-sm ">About</li>
            </Link>
            <Link href="projects">
              <li className="py-4 text-sm ">Projects</li>
            </Link>
            <Link href="events">
              <li className="py-4 text-sm ">Events</li>
            </Link>
            <Link href="experience">
              <li className="py-4 text-sm ">Experience</li>
            </Link>
            <Link href="joinComm">
              <button className="py-4 text-sm shadow text-white p-[.6rem] bg-orange-400 font-bold">Join Community</button>
            </Link>
          </ul>
          <div className="pt-10 md:pt-10">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let's Connect
            </p>
          </div>

          <div className="pt-4 flex justify-between ">
            <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer text-orange-600">
              <FaLinkedinIn size={20} />
            </div>
            <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer text-orange-600">
              <FaFacebookF size={20} />
            </div>{" "}
            <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer text-orange-600">
              <FaTwitter size={20} />
            </div>{" "}
            <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer text-orange-600">
              <FaGithub size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
