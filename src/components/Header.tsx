import Nav from './Nav';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-transparent fixed top-0 left-0 w-full flex items-center z-50'>
      <div id='navbar' className='w-screen 2xl:container relative'>
        <div className='flex items-center justify-between relative min-h-[4.5rem]'>
          {/* Logo */}
          <div className='flex items-center gap-x-4 order-1 w-[25%] box-border pl-6 lmd:pl-14 lg:pl-24 2xl:pl-16'>
            <Link href='/'>
              <FaPlaneDeparture size={25} className='text-gray-100' />
            </Link>
            <Link
              href='/'
              className='hidden lg:inline  text-lg sm:text-xl lg:text-[1.375rem] font-bold tracking-wide text-gray-100'
            >
              NomadX
            </Link>
          </div>


          {/* navigation */}
          <Nav />

          {/* login & register */}
          <div className='order-2 lg:order-3 lg:w-[25%] box-border flex justify-center items-center lg:pr-24 2xl:pr-16 gap-x-2 lg:justify-end'>
            <Link
              href='/#'
              className='uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest
             text-gray-700 border-gray-700'
            >
              log in
            </Link>
            <div className='h-4 sm:h-[1.5rem] w-[1px] border-l-[1px]  border-gray-700'></div>
            <Link
              href='/#'
              className='uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest text-gray-100'
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
