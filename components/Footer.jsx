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

    <footer className="w-full max-w-6xl flex-col lg:flex  md:justify-between items-center md:items-start md:p-10 md:flex-row md:gap-10 bg-slate-300 mt-20 container mx-auto bottom-0"  >
      <div className="footerOne pt-5 mx-5 md:mx-10 md:pt-0 text-center md:text-start flex-col">
        <LogoSm />
        <p>We are a first growing Open Source Community based in Uganda, but an extension of Open Source Community Africa</p>
      </div>
      <div className=" text-center md:text-start lg:mt-0 py-10 px-10 lg:px-0 lg:py-0">
        <h4 className="uppercase tracking-wider">aim</h4>
        <p>As a community, we intend to help integrate the art of open source contribution into African developer ecosystem whilst strongly advocating for the adoption of free and open source technologies.</p>
      </div>

      <div className="socia mx-10 py-5">
        <div className=" flex md:flex  justify-between gap-5 mt-5 md:mt-0" >
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaGoogle size={20} />
          </div>
          <div className="shadow-lg shadow-gray-400 p-2 rounded-full hover:scale-125 duration-300 ease-in-out cursor-pointer text-orange-600">
            <FaFacebookF size={20} />
          </div>{" "}
          <Link href="https://twitter.com/oscakampala" target="blank">
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
