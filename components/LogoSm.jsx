/** @format */

import Image from "next/image";

function LogoSm() {
  return (
    <div className="flex items-center text-[10px]">
      <Image src="/images/osca-logo.png" height={60} width={60} />
      <div className="logoWords">
        Open Source Community Africa {"{"}{" "}
        <span className="text-orange-400">Kampala</span>
        {" }"}
      </div>
    </div>
  );
}

export default LogoSm;
