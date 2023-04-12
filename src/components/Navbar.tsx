import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Navdata } from '@/constant/Data';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';



 const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='order-3 lg:px-0 lg:order-2 w-1/4 lg:w-fit'>
      <div className=' flex justify-end pr-6 lmd:pr-14 w-full'>
        <button className='lg:hidden rounded-full' onClick={handleClick}>
          <HiOutlineMenu color={'#f3f4f6'} size={30} />
        </button>
      </div>

      {/* //=mobile */}
      {!toggle ? (
        <nav
          id='nav-menu'
          className='lg:hidden absolute top-[4.5rem] right-4 py-[0.6rem] px-3 bg-gray-800'
        >
          <ul className='flex flex-col gap-2 pr-2 text-gray-800'>
            {/* //mapping title,link */}
            {Navdata.map((item) => (
              <div key={item.reference}>
                <li className='group'>
                  {/* nav link */}

                  <Link
                    href={`#${item.reference}`}
                    className='px-2 text-[.95rem] hover:text-opacity-60 text-gray-100'
                  >
                    {/* nav title */}
                    {item.title}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      ) : null}

      {/* desktop */}
      <nav id='nav-menu' className='hidden lg:block'>
        <ul className='flex'>
          {/* mapping title,link */}
          {Navdata.map((item) => (
            <div key={item.reference}>
              <li className='group'>
                {/* nav link */}

                <Link
                  href={`#${item.reference}`}
                  className='px-3 mx-2 py-1 xl:mx-3 hover:text-opacity-80 
                  text-gray-100'
                >
                  {/* nav title */}

                  {item.title}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};



export const Navbar = () => {
  return (
    <header className='bg-transparent fixed top-8 left-0 w-full flex items-center z-50'>
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

          {/* navigation elements */}
          <Navigation />

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


