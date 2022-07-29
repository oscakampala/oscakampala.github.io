/** @format */

import react from "react";
import Image from "next/image";


function about() {
  return (
    <section className="flex-col">
      <div className="flex gap-5">
        <div className="bgImg group">
          <Image
            src="/oscahomepage.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="aboutImg"
          />
        </div>
        <div className="flex-col justify-between w-[50%] pt-10 mt-[50px]">
          <h1 className="text-[60px]">
            Open Source Community <br />
            Africa <span className="text-orange-500">{`{Kampala}`}</span>
          </h1>
          <p>
            Open Source Community Africa (OSCA) is a community for open source
            lovers, enthusiasts, advocates and experts within and across Africa,
            with the sole aim of increasing th e rate of credible open source
            contributions by Africans.
          </p>
        </div>
      </div>

      <div className="text-center mt-[10rem] h-full">
        <h2>Why OSCA?</h2>
        <video autoPlay className="w-[750px] h-[auto] m-[auto] mt-5" controls  >
          <source src="/Open Source Summit Kampala 2022 Highlights.mp4#t=1" type="video/mp4" />
        </video>
      </div>
      <div className="text-center mt-20">
        <h3>Core Value</h3>
        <ul>
          <li>Naturing developers</li>
          <li>Naturing developers</li>
          <li>Naturing developers</li>
        </ul>
        <h3>Benefits</h3>
        <ul>
          <li>Naturing developers</li>
          <li>Naturing developers</li>
          <li>Naturing developers</li>
        </ul>

      </div>
    </section>
  );
}

export default about;
