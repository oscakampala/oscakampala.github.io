import oscaLogo from '../public/images/osca-logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Alert from './Utils';

const Community = () => {
  return (
    <section className='max-w-6xl mx-auto shadow-sm '>
      <div className='flex mt-7 md:mt-16 items-center cursor-pointer relative'>
        <div className='md:absolute left-0 flex items-center'>
          <Image src={oscaLogo} width={132} height={130} />
        </div>
        <p className='md:ml-36 text-2xl font-bold'>
          OSCA{' { '}
          <span className='text-secondary-4 '>Kampala</span>
          {' }'}
        </p>
      </div>
      <h1 className='px-5 text-3xl md:mt-10'>
        Join a Large Growing Open Source Community in Town
      </h1>
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [title, setTitle] = useState('');
  const [alert, setAlert] = useState({
    show: false,
    type: 'danger',
    msg: '',
  });

  const user = {
    firstname,
    lastname,
    email,
    username,
    password,
    title,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User details: ', user);

    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

    if (!reg.test(email)) {
      setAlert({
        type: 'danger',
        msg: 'Please enter a valid email address',
        show: true,
      });
      return;
    }

    if (password !== retypedPassword) {
      setAlert({
        show: true,
        type: 'danger',
        msg: 'Passwords do not match',
      });
      return;
    }

    setEmail('');
    setFirstname('');
    setlastname('');
    setUsername('');
    setPassword('');
    setRetypedPassword('');
    setTitle('');
  };

  const inputStyles = `rounded-md bg-[D9D9D9] py-2 pl-2 font-medium mt-4 w-full outline-none`;

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-12 px-5'>
        <div className='absolute'>
          <div className='fixed w-full top-2 left-0 z-30'>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
          </div>
        </div>
        <div className='md:flex w-full justify-between'>
          <div className='md:w-[50%]'>
            <h3 className='text-black'>First Name:*</h3>
            <input
              type='text'
              className={inputStyles}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className='mt-6 md:mt-0 md:w-[50%] md:ml-8'>
            <h3 className='text-black'>Last Name:</h3>
            <input
              type='text'
              className={inputStyles}
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Email:*</h3>
          <input
            type='text'
            className={`${inputStyles} md:w-[48%]`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Username:*</h3>
          <input
            type='text'
            className={`${inputStyles} md:w-[48%]`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mt-6 relative'>
          <h3 className='text-black'>Password:*</h3>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`${inputStyles} md:w-[48%]`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPassword ? (
            <FaEye
              id='password-eye'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute bottom-2 right-1 md:right-[53%] lg:cursor-pointer'
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
          <h3 className='text-black'>Retype Password:*</h3>
          <input
            type='password'
            className={`${inputStyles} md:w-[48%]`}
            value={retypedPassword}
            onChange={(e) => setRetypedPassword(e.target.value)}
            required
          />
        </div>
        <div className='mt-6 md:flex items-center'>
          <h3 className='text-black md:mr-12'>Title:*</h3>
          <div
            className='flex items-center mt-3 md:mt-0 md:mr-16 '
            onClick={() => setTitle('mr.')}>
            <input
              type='radio'
              id='mr'
              name='title'
              className='w-5 h-5 cursor-pointer'
            />
            <label
              htmlFor='mr'
              className='ml-4 text-lg font-bold cursor-pointer'>
              Mr.
            </label>
          </div>
          <div
            className='flex items-center mt-3 md:mt-0 md:mr-16 '
            onClick={() => setTitle('mrs')}>
            <input
              type='radio'
              id='mrs'
              name='title'
              className='w-5 h-5 cursor-pointer'
            />
            <label
              htmlFor='mrs'
              className='ml-4 text-lg font-bold cursor-pointer'>
              Mrs.
            </label>
          </div>
          <div
            className='flex items-center mt-3 md:mt-0'
            onClick={() => setTitle('others')}>
            <input
              type='radio'
              id='others'
              name='title'
              className='w-5 h-5 cursor-pointer'
            />
            <label
              htmlFor='others'
              className='ml-4 text-lg font-bold cursor-pointer'>
              Others
            </label>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <button
            type='submit'
            className='mt-12 w-full md:w-36 rounded-md shadow-md hover:shadow-xl py-3 capitalize bg-[#5A75AB] text-white font-bold tracking-wider'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Community;
