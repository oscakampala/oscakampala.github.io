/** @format */

import { Link } from "react-feather";
import Image from "next/image";

function Card({ url, leadImg, leadName, leadLang }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="shadow-xl p-10 rounded">
      <div className="relative w-[250px] h-[350px] overflow-auto">
        <Image
          src={leadImg}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />{" "}
      </div>
      <div className="flex bg-slate-300">
        <h3>{leadName}</h3>
        <p>{leadLang}</p>
        <div>
          <i onClick={handleClick}>k</i>
        </div>
      </div>
    </div>
  );
}

export default Card;
