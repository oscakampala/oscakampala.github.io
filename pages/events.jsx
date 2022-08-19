/** @format */

import styles from "../styles/events.module.css";
import Image from "next/image";

function events() {
  return (
    <section className="flex-col min-h-screen gap-20">
      <div className="flex items-center bg-[url('../public/images/community.jpg')]  bg-no-repeat bg-cover contrast-150  min-h-screen min-w-screen ">
        <div className="container mx-auto">
          <h1 className="text-center sm:text-[100px] md:text-[200px]">
            SUM<div className={styles.M}><br/>M</div>
            <div className={styles.wordFormat}>IT</div>
          </h1>
        </div>
      </div>
      <div className=" flex-col container mx-auto text-center mt-20 p-10 md:p-20 space-y-10 gap-20">
        <h1 className="text-[30px]">THE OPEN SOURCE SUMMIT KAMPALA EDITION</h1>
        <p className="tracking-widest">
          Summit events are carried out once yearly. Started right in 2022.
        </p>

        <div className="tracking-widest">
          <p className="bg-[#5A75AB] text-white container mx-auto w-60 p-4 rounded-sm">
            Date : 9th April 2022 <br /> Time : 10 AM to 5 PM
          </p>
        </div>

        <div className="grid grid-rows-2 gap-4 md:px-60">
          <div className="col-span-2 bg-cover">
            <img
              src="./images/summitposter.jpg"
              alt="img"
              height="auto"
              width="auto"
              className="rounded-xl"
            />
          </div>

          <img
            src="./images/musoke speaker.jpeg"
            alt="img"
            height="auto"
            width="auto"
            className="rounded-xl"
          />
          <img
            src="./images/malinga speaker.jpeg"
            alt="img"
            height="auto"
            width="auto"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col space-y-4 tracking-widest	px-[20%] text-center">
          <h2>Concept note</h2>
          <p>
            Open collaboration often allows communities to achieve more than
            their members can do alone.{" "}
          </p>
          <p>
            This, in turn, accelerates innovation and is one of the reasons all
            the tech giants such as Microsoft, Google, Meta, are supporting
            various open-source projects financially and bringing their
            engineers to help build a healthy open source community.
          </p>
        </div>

        <div className="sponsors">
          <h2>Event Sponsors</h2>
          <div className="logs">
            <img src="" alt="img" />
            <img src="" alt="img" />
          </div>
        </div>
      </div>
      <section className="flex justify-between items-center md:px-20">
        <h2 className="text-[60px] text-[#EAD308]">DONATE</h2>
        <div className="flex-col space-y-5 items-stretch">
          <div>
            <p>You can also contribute by donating</p>
            <p>Purchasing our Branded material</p>
          </div>

          <div>
            <img src="/images/products/shirt.png" height="auto" width="350px" />
          </div>

          <button className="rounded-sm bg-[#5A75AB] text-white p-4 align-middle">
            VIEW PRODUCTS
          </button>
        </div>
      </section>
    </section>
  );
}

export default events;
