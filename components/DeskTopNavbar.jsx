import LogoLg from './LogoLg';
import Link from 'next/link';

const DeskTopNavbar = () => {
    
    const LINKS = [
        { text: 'about', path: '/' },
        { text: 'projects', path: '/projects' },
        { text: 'experince', path: '/experience' },
        { text: 'events', path: '/events' },
      ];

    return (
      <div className='flex justify-between items-center w-full h-full px-5 mx-auto'>
        <LogoLg />
  
        <ul className='hidden md:flex items-center'>
          {LINKS.map((link, index) => {
            const { text, path } = link;
            return (
              <Link href={path} key={index}>
                <li className='capitalize text-xs lg:text-sm tracking-wider ml-10 font-bold'>
                  {text}
                </li>
              </Link>
            );
          })}
          <Link href='https://t.me/oscakampala'>
            <button className='ml-10 text-xs lg:text-sm tracking-wider none shadow-md hover:shadow-xl normal-case text-white py-2 px-10 bg-[#C6C600] font-bold rounded-md'>
              Join community
            </button>
          </Link>
          <Link href='/login' passHref>
            <button className='ml-10 text-xs lg:text-sm tracking-wider capitalize shadow-md hover:shadow-xl text-white py-2 px-10 bg-[#5A75AB] font-bold rounded-md'>
              login
            </button>
          </Link>
        </ul>
      </div>
    );
  };

  export default DeskTopNavbar;