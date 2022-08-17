import Image from 'next/image';
import Card from '../components/Card';
import cardData from '../components/metadata/metadata.js';
import bgImg from '../public/images/oscahomepage.jpg';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Home() {
  const cardElement = cardData.map((data) => {
    return (
      <Card
        leadImg={`/images/leads/${data.leadImg}`}
        leadName={data.name}
        leadLang={data.lang}
        leadLinkedin={data.links[0]}
        leadTwitter={data.links[1]}
        leadGithub={data.links[2]}
      />
    );
  });

  return (
    <section className='grid'>
      <div className='flex justify-center h-[700px] md:h-screen w-full relative'>
        <Zoom bottom>
          <Image
            src={bgImg}
            layout='fill'
            className='object-cover md:object-fill'
          />
        </Zoom>
        <div className='containe md:mx-auto  flex-col justify-evenly text-white  text-sm absolute w-full p-5  text-center top-[300px] bg- backdrop-blur-sm bg-black/30 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg'>
          <Slide left>
            <h1 className=' text-white text-[30px] md:text-[60px]  '>
              Open Source Community <br />
              Africa{'{'}
              <span className='text-orange-400 '>Kampala</span>
              {'}'}
            </h1>
          </Slide>

          <Slide right>
            <p className='mt-10  '>
              Open Source Community Africa (OSCA) is a community for open source
              lovers, enthusiasts, advocates and experts within and across
              Africa, with the sole aim of increasing the rate of credible open
              source contributions by Africans.
            </p>
          </Slide>
        </div>
      </div>

      <div className='containe mx-auto text-center mt-[3rem] h-full'>
        <h2>Why OSCA?</h2>
        <iframe
          className='container mx-auto w-[560px]'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/oylCYRfk0NQ'
          title='YouTube video player'
          frameBorder=''
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>

      <div className='container max-w-6xl mx-auto mt-20'>
        <h2 className='text-center py-4 bg-slate-300'>The Team</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 pb-8 bg-slate-300'>
          {cardElement}
        </div>
      </div>
      <div className='sm:flex justify-center  text-center mt-20'>
        <div className='sm:mr-10'>
          <h3>Core Values</h3>
          <ul>
            <li>Nurturing developers</li>
            <li>Nurturing developers</li>
            <li>Nurturing developers</li>
          </ul>
        </div>
        <div className='mt-5 sm:mt-0'>
          <h3>Benefits</h3>
          <ul>
            <li>Nurturing developers</li>
            <li>Nurturing developers</li>
            <li>Nurturing developers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
