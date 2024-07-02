/** @format */

import styles from '../styles/events.module.css';
import img from 'next/image';
import Image from 'next/image';
import tungaSVG from '../public/images/tunga.svg';
import innovationVillageSVG from '../public/images/innovation-village.svg';
import oscaShirts from '../public/images/osca-shirts.svg';
import summitPoster from '../public/images/summitposter.jpg';
import musokeSpeaker from '../public/images/musoke speaker.jpeg';
import malingaSpeaker from '../public/images/malinga speaker.jpeg';
import coverImage from '../public/images/community.jpg';
import hiringInTech from '../public/images/ugDevFestSummit/Hiring-in-Tech.jpg';
import PositioningUgandaTechTalent from '../public/images/ugDevFestSummit/Positioning-Uganda-tech-talent.jpg';
import UgDevFestSummit from '../public/images/ugDevFestSummit/Ug-DevFest-Summit.jpg';
import announcingOurPartnership from '../public/images/ugDevFestSummit/Announcing-our-partnership.jpg';
import tickets from '../public/images/ugDevFestSummit/Tickets.jpg';
import uGDevLaunch from '../public/images/ugDevFestSummit/UG-DEV-launch.jpg';
import refactoryLogo from '../public/images/ugDevFestSummit/Refactory_Logo.png';
import ictau from '../public/images/ugDevFestSummit/ictau.jpeg';
import laboremusLogo from '../public/images/ugDevFestSummit/labo-remus.png';
import mictLogo from '../public/images/ugDevFestSummit/mict-logo.png';
import nationalICTinnovationHubLogo from '../public/images/ugDevFestSummit/national-ICT-innovation-Hub.jpg';
import nftConsultLogo from '../public/images/ugDevFestSummit/nft-consult.jpg';
import tekJuiceLogo from '../public/images/ugDevFestSummit/tek_juice_logo.jpg';



function events() {
  return (
    <section className=''>
      <div className='relative w-screen h-[300px] md:h-screen'>
        <div className='h-full w-full absolute'>
          <img
            src={coverImage.src}
            alt='cover image'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='mx-auto flex items-center justify-center md:flex-col h-full relative'>
          <h1 className='font-bold text-7xl md:text-[200px] uppercase'>
            <span className='text-[#283756]'>sum</span>
            <span className='text-[#C6C600]'>m</span>{' '}
            <br className='hidden md:block' />
            <span className='text-white md:hidden'>it</span>
          </h1>
          <h1 className='font-bold hidden md:block text-white text-[200px] uppercase text-center'>it</h1>
        </div>
      </div>
      <div className='max-w-6xl mx-auto mt-10'>

        <div className='md:shadow-[0px_0px_0px_0px] md:mx-5 mx-auto'>
          {/* <Summit /> */}
          <DevFest />
          <ConceptNote />
          <Sponsors />
        </div>
        <Support />
      </div>
    </section>
  );
}

const DevFest = () => {
  return (
    <div className='px-6'>
      <h1 className='text-[30px] py-8 text-center md:text-left'>
        UG DEV SUMMIT
      </h1>
      <p className='tracking-widest text-center md:text-left pb-3'>
        OUR PARTNERSHIP WITH REFACTORY
      </p>



      <div class="grid grid-cols-2 md:grid-cols-2 gap-3">
        <div class="grid gap-1">
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              alt='announcingOurPartnership'
              src={announcingOurPartnership}

            />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              alt='PositioningUgandaTechTalent'
              src={PositioningUgandaTechTalent}

            />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              alt='UgDevFestSummit'
              src={UgDevFestSummit}

            />
          </div>

        </div>
        <div class="grid gap-2">
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              alt='uGDevLaunch'
              src={uGDevLaunch}
            />
          </div>
          <div>
            <Image
              class="h-auto max-w-full rounded-lg"
              alt='tickets'
              src={tickets}
            />
          </div>

          <div></div>

        </div>


      </div>


    </div>
  );
};


const Summit = () => {
  return (
    <div className='px-6'>
      <h1 className='text-[30px] py-8 text-center md:text-left'>
        THE OPEN SOURCE SUMMIT KAMPALA EDITION
      </h1>
      <p className='tracking-widest text-center md:text-left'>
        Summit events are carried out once yearly. Started right in 2022.
      </p>
      <div className='flex flex-col items-center md:items-start md:w-[fit-content] tracking-widest bg-[#5A75AB] text-white my-8 p-4 rounded-md'>
        <p>Date : 9th April 2022</p>
        <p>Time : 10 AM to 5 PM</p>
      </div>
      <div className='grid md:grid-rows-2 md:grid-cols-4 gap-4'>
        <div className='bg-cover col-span-2 md:col-span-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3'>
          <img
            src={summitPoster.src}
            alt='img'
            width='auto'
            height='auto'
            className='rounded-xl'
          />
        </div>
        <div className=''>
          <img
            src={musokeSpeaker.src}
            alt='img'
            width='auto'
            height='auto'
            className='rounded-xl h-full'
          />
        </div>
        <img
          src={malingaSpeaker.src}
          alt='img'
          width='auto'
          height='auto'
          className='rounded-xl h-full'
        />
      </div>
    </div>
  );
};

const ConceptNote = () => {
  return (
    <div className='mt-8 px-6'>
      <h2 className='px-0 capitalize'>Concept note</h2>
      <p>
        Positioning Uganda's Tech Talent for Digital economy growth.
        Open collaboration often allows communities to achieve more than their
        members can do alone.{' '}
      </p>
      <p className='pt-3'>
        This, in turn, accelerates innovation and is one of the reasons all the
        tech giants such as Microsoft, Google, Meta, are supporting various
        open-source projects financially and bringing their engineers to help
        build a healthy open source community.
      </p>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className='mt-12 pb-8 bg-[#D9D9D9]'>
      <h2 className='px-0 text-center pt-8'>Event Sponsors</h2>
      <div className='w-full flex justify-between px-8'>
        {/* SVGs for small screens */}
        
        {/* SVGs for very large screens */}
        <div className='block'>
          {/* <Image src={tungaSVG} alt='tunga svg' width={288} height={285} /> */}
          <Image src={refactoryLogo} alt='refactoryLogo' width={400} height={80} className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4' />

        </div>
        <div className='block'>
          <Image
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>

        <div className='block'>
          <Image
            alt='ictau'
            src={ictau}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>

        <div className='block'>
          <Image
            alt='laboremusLogo'
            src={laboremusLogo}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>
        <div className='block'>
          <Image
            alt='mictLogo'
            src={mictLogo}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>
        <div className='block'>
          <Image
            alt='nationalICTinnovationHubLogo'
            src={nationalICTinnovationHubLogo}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>
        <div className='block'>
          <Image
            alt='nftConsultLogo'
            src={nftConsultLogo}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>
        <div className='block'>
          <Image
            alt='tekJuiceLogo'
            src={tekJuiceLogo}
            width={543}
            height={288}
            className='w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4'
          />
        </div>

      </div>
    </div>
  );
};

const Support = () => {
  return (
    <section className='mt-8'>
      <div className='md:flex items-center  justify-around'>
        <div>
          <h2 className='text-center text-5xl text-[#EAD308]'>DONATE</h2>
          <div className='flex flex-col items-center tracking-wider w-56 mx-auto'>
            <p className='text-center'>You can also contribute by donating</p>
            <p className='text-center'>Purchasing our Branded material</p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8'>
          <Image src={oscaShirts} alt='osca shirts' width={238} height={245} />
          <button className='rounded-md bg-[#5A75AB] text-white text-lg py-4 px-10 tracking-wider align-middle'>
            VIEW PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default events;
