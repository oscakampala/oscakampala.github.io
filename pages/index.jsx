import Image from 'next/image';
import Card from '../components/Card';
import cardData from '../components/metadata/metadata.js';
import bgImg from '../public/images/oscahomepage.jpg';

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
      <div className='flex justify-center h-screen w-full relative'>
        <Image src={bgImg} layout='fill' objectFit='cover' />
        <div className='containe md:mx-auto  flex-col justify-evenly text-white  text-sm absolute w-full p-5  text-center top-[300px] bg- backdrop-blur-sm bg-black/30 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg'>
          <h1 className=' text-white text-[30px] md:text-[60px]  '>
            Open Source Community <br />
            Africa{'{'}
            <span className='text-orange-400 '>Kampala</span>
            {'}'}
          </h1>
          <p className='mt-10  '>
            Open Source Community Africa (OSCA) is a community for open source
            lovers, enthusiasts, advocates and experts within and across Africa,
            with the sole aim of increasing the rate of credible open source
            contributions by Africans.
          </p>
        </div>
      </div>

      <div className='text-center p-20 bg-slate-300'>
        <h2 className='text-center pb-10'>What is OSCA?</h2>
        <p className='md:px-10'>
          Open Source Community Africa (OSCA) is a community of open source
          lovers, enthusiasts, advocates and experts across the African
          continent. OSCA's sole goal is to increase the rate of credible
          countributions to open source by African coders, writers, designers
          and everyone involved in the tech space to local & global projects;
          changing the perception of Africans from just a billion users to the{' '}
          <strong> NEXT BILLION CREATORS </strong>
        </p>
      </div>
      <div className='container mx-auto text-center mt-[3rem] h-full'>
        <h2>Why OSCA?</h2>
        <iframe
          className='container mx-auto w-[100%] md:w-[100%] sm:w-[90%]'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/oylCYRfk0NQ'
          title='YouTube video player'
          frameBorder=''
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>

      <div className='container mx-auto mt-20 max-w-6xl mx-auto'>
        <h2 className='text-center py-20 bg-slate-300'>The Team</h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center pb-20 px-8 bg-slate-300'>
          {cardElement}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center text-center mt-20'>
        <div className='md:mr-12'>
          <h3 className='text-xl'>Core Values</h3>
          <ul>
            <li>Creativity and Excellence</li>
            <li>Boldness and Integrity in operations</li>
            <li>Developer Nurturing and Skillset enhancement</li>
          </ul>
        </div>
        <div className='mt-5 md:mt-0'>
          <h3 className='text-xl'>Benefits</h3>
          <ul>
            <li>Be part of Africa's next Billion Creators</li>
            <li>Networking with best developer talent</li>
            <li>Making a world a better place using open source software</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
