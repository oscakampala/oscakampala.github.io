/** @format */

import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Card({
  url,
  leadImg,
  leadName,
  leadLang,
  leadLinkedin,
  leadTwitter,
  leadGithub,
}) {
 
  return (
    <div className='flex flex-col w-full justify-center shadow shadow-black-500/40 p-8 rounded bg-slate-200'>
      <Zoom bottom>
        <Image
          src={leadImg}
          objectFit='cover'
          className='rounded'  
          height={600}
          width={500}
        />{' '}
      </Zoom>
      <div className='flex sm:flex-col md:flex-row justify-between container px-2 pt-4 '>
        <Fade right>
          <div>
            <h3>{leadName}</h3>
            <p className='banner'>{leadLang}</p>
          </div>
        </Fade>

        <Fade left>
          <div className='flex gap-2 sm:mt-3 md:mt-0'>
            <div className='cursor-pointer'>
              {' '}
              <a target='_blank' href={leadLinkedin}>
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className='cursor-pointer'>
              <a target='_blank' href={leadTwitter}>
                <FaTwitter size={20} />
              </a>
            </div>
            <div className='cursor-pointer'>
              <a target='_blank' href={leadGithub}>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Card;
