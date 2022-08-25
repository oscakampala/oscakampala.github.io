import oscaLogo from '../public/images/osca-logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';

const Community = () => {
  return (
    <section>
      <div className='flex mt-7 items-center cursor-pointer relative'>
        <div className='md:absolute left-0 flex items-center'>
          <Image src={oscaLogo} width={80} height={80} />
        </div>
        <p className='md:ml-20'>
          OSCA{' { '}
          <span className='text-secondary-4 '>Kampala</span>
          {' }'}
        </p>
      </div>
      <h1 className='px-5'>Join a Large Growing Community in Town</h1>
      <p className='px-5 text-2xl pt-7'>
        This content is private (for you only)
      </p>
      <Form />
    </section>
  );
};

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [title, setTitle] = useState('');
  

  const inputStyles = `rounded-md bg-[D9D9D9] py-2 pl-2 font-medium mt-4 w-full outline-none`;
  return (
    <div>
      <form action='' className='mt-12 px-5'>
        <div>
          <h3 className='text-black'>First Name:</h3>
          <input type='text' className={inputStyles} value={firstname} onChange/>
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Username:</h3>
          <input type='text' className={inputStyles} />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Last Name:</h3>
          <input type='text' className={inputStyles} />
        </div>
        <div className='mt-6 relative'>
          <h3 className='text-black'>Password:</h3>
          <input
            type={showPassword ? 'text' : 'password'}
            className={inputStyles}
          />
          {showPassword ? (
            <FaEye
              id='password-eye'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute bottom-2 right-1 lg:cursor-pointer'
            />
          ) : (
            <FaEyeSlash
              id='password-eye'
              onClick={() => setShowPassword(!showPassword)}
              className='w-5 h-5 absolute bottom-2 right-1 lg:cursor-pointer'
            />
          )}
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Retype Password:</h3>
          <input type='text' className={inputStyles} />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Title:</h3>
          <div className='flex items-center mt-3'>
            <input type="radio" id='mr' name='title' className='w-5 h-5' />
            <label htmlFor="mr" className='ml-4 text-lg font-bold'>Mr.</label>
          </div>
          <div className='flex items-center mt-3'>
            <input type="radio" id='mrs' name='title' className='w-5 h-5' />
            <label htmlFor="mrs" className='ml-4 text-lg font-bold'>Mrs.</label>
          </div>
          <div className='flex items-center mt-3'>
            <input type="radio" id='others' name='title' className='w-5 h-5' />
            <label htmlFor="others" className='ml-4 text-lg font-bold'>Others</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Community;
