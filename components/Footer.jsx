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
    <footer className="flex gap-10 justify-around bg-slate-300 mt-20 p-5">
      <div className="footerOne w-80">
        <LogoSm />
      </div>
      <div className="w-80">
        <h4>aim</h4>
        <p className="text-xs">As a community, we intend to help integrate the art of open source contribution into African developer ecosystem whilst strongly advocating for the adoption of free and open source technologies.</p>
      </div>


      <div className="social">
        <div className="pt-4 flex w-[30%] justify-around mx-auto">
          <Link href="mailto:oscakampala@gmail.com">
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaGoogle size={20} />
          </div>
          </Link>
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
