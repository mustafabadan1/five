import React, { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Navdata } from '@/constant/Data';
import Link from 'next/link';

type linkProps = {
  title?: string;
  reference: string;
};

const Nav = () => {
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
      {/* //? hoh */}
      {!toggle ? (
        <nav
          id='nav-menu'
          className={`lg:hidden absolute top-[4.5rem] right-4 py-[0.6rem] px-3 bg-gray-800`}
        >
          <ul className='flex flex-col gap-2 pr-2 text-gray-800'>
            {/* mapping title,link */}
            {Navdata.map((item) => (
              <div key={item.reference}>
                <li className='group'>
                  {/* nav link */}

                  <Link
                    href={`#${item.reference}`}
                    className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
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

export default Nav;
