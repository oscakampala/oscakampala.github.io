/** @format */

import Image from 'next/image';
import Link from 'next/link';

function LogoLg() {
  return (
    <Link className='' href='/'>
      <div className='flex items-center cursor-pointer relative'>
        <div className='md:absolute left-0 flex items-center'>
          <Image src='/images/osca-logo.png' width={80} height={80} />
        </div>
        <p className='md:ml-20'>
          OSCA{'{'}
          <span className='text-secondary-4 '>Kampala</span>
          {'}'}
        </p>
      </div>
    </Link>
  );
}

export default LogoLg;
