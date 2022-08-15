/** @format */

import Image from "next/image";
import Link from "next/link";
  
function LogoLg() {
  return (
    <Link className="flex items-center" href='/'>
     <div className="navLogo flex items-center text-[20px] md:text-[25px] cursor-pointer"> {/*the cursor-pointer className ensures a hand shaped cursor when hovering over the logo */}
      <Image
        src="/images/osca-logo.png"
        height="100"
        width="100"
        className="logomd"
      />
      <span className="font-bold text-sm md:text-xl">
        OSCA{"{"}
        <span className="kampala text-orange-400 ">Kampala</span>
        {"}"}
      </span>
      </div>
      </Link>
  );
}

export default LogoLg;
