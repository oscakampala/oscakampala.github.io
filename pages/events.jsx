/** @format */

import styles from '../styles/events.module.css';
import img from 'next/image';
import tungaSVG from '../public/images/tunga.svg';
import innovationVillageSVG from '../public/images/innovation-village.svg';
import oscaShirts from '../public/images/osca-shirts.svg';
import summitPoster from '../public/images/summitposter.jpg';
import musokeSpeaker from '../public/images/musoke speaker.jpeg';
import malingaSpeaker from '../public/images/malinga speaker.jpeg';

function events() {
  return (
    <section className=''>
      <div className="flex items-center bg-[url('../public/images/community.jpg')]  bg-no-repeat bg-cover contrast-150  min-h-screen min-w-screen ">
        <div className='mx-auto'>
          <h1 className='text-center sm:text-[100px] md:text-[200px]'>
            SUM
            <div className={styles.M}>
              <br />M
            </div>
            <div className={styles.wordFormat}>IT</div>
          </h1>
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
      <div className='grid grid-rows-2 grid-cols-4 gap-4 border'>
        <div className='bg-cover col-start-1 col-end-4 row-start-1 row-end-3'>
          <img
            src={summitPoster.src}
            alt='img'
            width='auto'
            height='auto'
            className='rounded-xl'
          />
        </div>
          <img
            src={musokeSpeaker.src}
            alt='img'
            width='auto'
            height='auto'
            className='rounded-xl h-full'
          />
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
          <img src={tungaSVG} alt='tunga svg' width={80} height={80} />
        </div>
        <div className='sm:hidden'>
          <img
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={166}
            height={88}
          />
        </div>
        {/* SVGs for medium screens screens */}
        <div className='hidden sm:block lg:hidden'>
          <img src={tungaSVG} alt='tunga svg' width={188} height={188} />
        </div>
        <div className='hidden sm:block lg:hidden'>
          <img
            alt='innovation villageg'
            src={innovationVillageSVG}
            width={343}
            height={188}
          />
        </div>
        {/* SVGs for very large screens */}
        <div className='hidden lg:block'>
          <img src={tungaSVG} alt='tunga svg' width={288} height={285} />
        </div>
        <div className='hidden lg:block'>
          <img
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
          <img src={oscaShirts} alt='osca shirts' width={238} height={245} />
          <button className='rounded-md bg-[#5A75AB] text-white text-lg py-4 px-10 tracking-wider align-middle'>
            VIEW PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default events;
