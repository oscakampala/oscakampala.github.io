import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  return (
    <section className='md:mt-12'>
      <div className='max-w-sm mx-auto md:max-w-2xl'>
        <div className='md:border-[1px] rounded-md md:flex flex-row-reverse items-center md:pb-12 md:pt-8 md:pr-10'>
          <div className='md:flex items-center h-[200px] md:border-l-[1px] border-slate-900 ml-5 md:pl-8'>
            <Image
              src='/../public/images/osca-logo.png'
              alt='/'
              width={200}
              height={200}
            />
          </div>
          <LoginSection />
        </div>
        <div className='px-5 mt-6 md:flex md:px-0 justify-between'>
          <h3 className='cursor-pointer'>Forgot email or password?</h3>
          <h3 className='pt-2 md:pt-0 cursor-pointer'>Create Account.</h3>
        </div>
      </div>
    </section>
  );
};

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const user = {
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `form has been submitted by ${user.email} with password ${user.password}`
    );

    setEmail('');
    setPassword('');
  };

  return (
    <div className='px-5'>
      <h1>Login here</h1>
      <form onSubmit={handleSubmit} className=''>
        <div className='mt-6 relative'>
          <h3>Email or username</h3>
          <HiOutlineMail className='w-7 h-7 absolute bottom-1' />
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-transparent py-2 pl-8 font-medium border-b-[1px] border-b-slate-900 w-full outline-none'
          />
        </div>
        <div className='mt-6 relative'>
          <h3>Password</h3>
          <RiLockPasswordLine className='w-7 h-7 absolute bottom-1' />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-transparent py-2 pl-8 font-medium border-b-[1px] border-b-slate-900 w-full outline-none'
            />
          {showPassword ? (
            <FaEye
              id='password-eye'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute bottom-1 right-1 lg:cursor-pointer'
            />
          ) : (
            <FaEyeSlash
              id='password-eye'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute bottom-1 right-1 lg:cursor-pointer'
            />
          )}
        </div>
        <button
          type='submit'
          className='bg-secondary-4 w-full text-white text-base py-3 mt-10 rounded-md font-bold tracking-wider cursor-pointer'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
