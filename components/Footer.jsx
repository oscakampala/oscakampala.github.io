/** @format */

import LogoSm from "./LogoSm";
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

function Footer() {
  return (
    <footer className="flex gap-10 justify-around bg-slate-300 mt-20">
      <div className="footerOne">
        <LogoSm />
      </div>
      <div>
        <h4>aim</h4>
        <p>To develop the Future</p>
      </div>


      <div className="social">
        <div className="pt-4 flex w-[30%] justify-around mx-auto">
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaLinkedinIn size={20} />
          </div>
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaFacebookF size={20} />
          </div>{" "}
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaTwitter size={20} />
          </div>{" "}
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
