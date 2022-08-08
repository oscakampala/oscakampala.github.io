/** @format */

import LogoSm from "./LogoSm";
import Link from "next/link";

import {
  AiOutlineMenu,
  CgMenuRight,
  MdOutlineClose,
  CgClose,
} from "react-icons/cg";

import {
  FaFacebook,
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (

    <footer className="flex-col md:flex  justify-between px-5 pb-5 gap-5  md:flex-row md:gap-10 md:justify-between bg-slate-300 mt-20 w-full  container mx-auto items-center rounded-tl-lg rounded-bl-lg"  >
      <div className="footerOne">
        <LogoSm />
      </div>
      <div className="text-center">
        <h4>aim</h4>
        <p className="text-xs">As a community, we intend to help integrate the art of open source contribution into African developer ecosystem whilst strongly advocating for the adoption of free and open source technologies.</p>
      </div>

      <div className="social">
        <div className=" flex md:flex  justify-between gap-5 mt-2 md:mt-0" >
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaGoogle size={20} />
          </div>
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaFacebookF size={20} />
          </div>{" "}
          <Link href="https://twitter.com/oscakampala">
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaTwitter size={20} />
          </div>
          </Link>{" "}
          <Link href="https://github.com/OSCA-Kampala-Chapter">
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaGithub size={20} />
          </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
