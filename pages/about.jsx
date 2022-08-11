/** @format */

import react from "react";
import Image from "next/image";
import Card from "../components/Card";
import cardData from "../components/metadata/metadata.js";
import bgImg from "../public/images/oscahomepage.jpg"

function about() {
  const cardElement = cardData.map((data) => {
    return (
      <Card
        leadImg={`/images/leads/${data.leadImg}`}
        leadName={data.name}
        leadLang={data.lang}
      />
    );
  });

  return (
    <section className="flex-col md:flex-col">
      <div className="flex justify-center h-full w-full">
        <div className=" shrink h-screen  md:h-screen">
          <Image
            src={bgImg}
            layout="fill"
            objectFit="cover"
            // className=" h-screen w-[auto] object-cover"
          />
        </div>
        <div
          className="container md:mx-auto  flex-col justify-evenly text-white  text-sm absolute w-full p-5  text-center top-[300px] bg- backdrop-blur-sm bg-black/30 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <h1 className=" text-white text-[30px] md:text-[60px]  ">
            Open Source Community <br />
            Africa{"{"}
            <span className="kampala text-orange-400 ">Kampala</span>
            {"}"}
          </h1>

          <p className="mt-10  ">
            Open Source Community Africa (OSCA) is a community for open source
            lovers, enthusiasts, advocates and experts within and across Africa,
            with the sole aim of increasing th e rate of credible open source
            contributions by Africans.
          </p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-[10rem] h-full">
        <h2>Why OSCA?</h2>
        <video autoPlay className="container mx-auto w-[750px]" controls>
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
      <div className="container  mx-auto mt-20">
        <h2 className="text-center py-4 bg-slate-300">Team</h2>
        <div className=" flex flex-wrap gap-5 justify-center px-4 ">
          {cardElement}
        </div>
      </div>
    </section>
  );
}

export default about;
