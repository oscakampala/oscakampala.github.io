/** @format */

import Image from "next/image";

function LogoSm() {
  return (
    <div className="flex items-center text-[10px]">
      <Image src="/images/osca-logo.png" height={30} width={30} />
      <div className="logoWords w-96">
        <p className="text-xs">
          Open Source Community Africa {"{"}{" "}
          <span className="text-orange-400">Kampala</span>
          {" }"}
        </p>
        <p>We are a first growing Open Source Community based in Uganda, but an extension of Open Source Community Africa</p>
      </div>
    </div>
  );
}

export default LogoSm;
