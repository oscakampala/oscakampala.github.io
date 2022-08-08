/** @format */

import Image from "next/image";

function LogoSm() {
  return (
    <div className="flex items-center text-[10px] min-w-max font-bold">
      <Image src="/images/osca-logo.png" height={30} width={30} />
      <div className="logoWords">
        <p className="text-xs">
          Open Source Community Africa {"{"}{" "}
          <span className="text-orange-400">Kampala</span>
          {" }"}
        </p>
      </div>
    </div>
  );
}

export default LogoSm;
