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
        <div className='md:shadow-[0px_0px_0px_1px] md:mx-5 mx-auto'>
          <Summit />
          <ConceptNote />
          <Sponsors />
        </div>
        <Support />
      </div>
    </section>
  );
}

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
        <div className='sm:hidden'>
          <Image src={tungaSVG} alt='tunga svg' width={80} height={80} />
        </div>
        <div className='sm:hidden'>
          <Image
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={166}
            height={88}
          />
        </div>
        {/* SVGs for medium screens screens */}
        <div className='hidden sm:block lg:hidden'>
          <Image src={tungaSVG} alt='tunga svg' width={188} height={188} />
        </div>
        <div className='hidden sm:block lg:hidden'>
          <Image
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={343}
            height={188}
          />
        </div>
        {/* SVGs for very large screens */}
        <div className='hidden lg:block'>
          <Image src={tungaSVG} alt='tunga svg' width={288} height={285} />
        </div>
        <div className='hidden lg:block'>
          <Image
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={543}
            height={288}
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
