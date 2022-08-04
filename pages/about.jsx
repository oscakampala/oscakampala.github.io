/** @format */

import react from "react";
import Image from "next/image";
import Team from "../components/Team";

function about() {
  return (
    <section className="flex-row md:flex-col">
      <div className=" md:gap-5 md:flex h-full">
        <div className=" shrink h-screen  md:h-screen bg-slate-600">
          <Image
            src="/oscahomepage.jpg"
            layout="fill"
            objectFit="cover"
            // className=" h-screen w-[auto] object-cover"
          />
        </div>
        <div className="h-full flex-col justify-evenly text-white  text-sm absolute md:w-[50%] p-11 md:mt-[50px]  text-center top-[200px]  ">
          <h1 className=" text-white text-[30px] md:text-[60px] ">
            Open Source Community <br />
            Africa{"{"}
            <span className="kampala text-orange-400 ">Kampala</span>
            {"}"}
          </h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolore, sapiente id eveniet ea perspiciatis alias ut sequi
            voluptatibus, odit explicabo, pariatur molestias corporis excepturi
            blanditiis officia! Quidem, eligendi fuga!
          </p>
          <p className="mt-10 ">
            Open Source Community Africa (OSCA) is a community for open source
            lovers, enthusiasts, advocates and experts within and across Africa,
            with the sole aim of increasing th e rate of credible open source
            contributions by Africans.
          </p>
        </div>
      </div>

      <div className="text-center mt-[10rem] h-full">
        <h2>Why OSCA?</h2>
        <video autoPlay className="w-[750px] h-[auto] m-[auto] mt-5" controls>
          <source
            src="/Open Source Summit Kampala 2022 Highlights.mp4#t=1"
            type="video/mp4"
          />
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
      <div>
        <Team />
      </div>
    </section>
  );
}

export default about;
