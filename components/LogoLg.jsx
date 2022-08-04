/** @format */

import Image from "next/image";

function LogoLg() {
  return (
    <div className="navLogo flex items-center text-[20px] md:text-[25px] ">
      <Image
        src="/images/osca-logo.png"
        height={100}
        width={100}
        className="logoMd"
      />
      <span className="font-bold text-sm md:text-xl">
        OSCA{"{"}
        <span className="kampala text-orange-400 ">Kampala</span>
        {"}"}
      </span>
    </div>
  );
}

export default LogoLg;
