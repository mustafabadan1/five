import React, { useState, useEffect } from 'react';

type linkProps = {
  title?: string;
  reference: string;
};

const NavDesktop = ({ title, reference }: linkProps) => {
  return (
    <li className='group'>
      <a
        href={`#${reference}`}
        className='px-3 mx-2 py-1 xl:mx-3 hover:text-opacity-80 
         text-gray-100'
      >
        {title}
      </a>
    </li>
  );
};

export default NavDesktop;
