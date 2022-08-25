import oscaLogo from '../public/images/osca-logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Alert from './Utils'

const Community = () => {
  return (
    <section>
      <div className='flex mt-7 items-center cursor-pointer relative'>
        <div className='md:absolute left-0 flex items-center'>
          <Image src={oscaLogo} width={132} height={130} />
        </div>
        <p className='md:ml-20 text-2xl font-bold'>
          OSCA{' { '}
          <span className='text-secondary-4 '>Kampala</span>
          {' }'}
        </p>
      </div>
      <h1 className='px-5 text-3xl'>Join a Large Growing Community in Town</h1>
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

  const inputStyles = `rounded-md bg-[D9D9D9] py-2 pl-2 font-medium mt-4 w-full outline-none`;

  const user = {
    firstname,
    lastname,
    email,
    username,
    password,
    title
  }

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('User details: ', user);

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
   setTitle('')
 }

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-12 px-5'>
        <div className='absolute'>
          <div className='fixed w-full top-2 left-0 z-30'>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
          </div>
        </div>
        <div>
          <h3 className='text-black'>First Name:*</h3>
          <input
            type='text'
            className={inputStyles}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Last Name:</h3>
          <input
            type='text'
            className={inputStyles}
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Email:*</h3>
          <input
            type='text'
            className={inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Username:*</h3>
          <input
            type='text'
            className={inputStyles}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mt-6 relative'>
          <h3 className='text-black'>Password:*</h3>
          <input
            type={showPassword ? 'text' : 'password'}
            className={inputStyles}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          <h3 className='text-black'>Retype Password:*</h3>
          <input
            type='text'
            className={inputStyles}
            value={retypedPassword}
            onChange={(e) => setRetypedPassword(e.target.value)}
            required
          />
        </div>
        <div className='mt-6'>
          <h3 className='text-black'>Title:*</h3>
          <div
            className='flex items-center mt-3'
            onClick={() => setTitle('mr.')}>
            <input type='radio' id='mr' name='title' className='w-5 h-5' />
            <label htmlFor='mr' className='ml-4 text-lg font-bold'>
              Mr.
            </label>
          </div>
          <div
            className='flex items-center mt-3'
            onClick={() => setTitle('mrs')}>
            <input type='radio' id='mrs' name='title' className='w-5 h-5' />
            <label htmlFor='mrs' className='ml-4 text-lg font-bold'>
              Mrs.
            </label>
          </div>
          <div
            className='flex items-center mt-3'
            onClick={() => setTitle('others')}>
            <input type='radio' id='others' name='title' className='w-5 h-5' />
            <label htmlFor='others' className='ml-4 text-lg font-bold'>
              Others
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='mt-12 w-full rounded-md py-3 capitalize bg-[#5A75AB] text-white font-bold tracking-wider'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Community;
