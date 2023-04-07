import React, { useState, useEffect } from 'react';

type linkProps = {
  title?: string;
  reference: string;
};

const NavMobile = ({ title, reference }: linkProps) => {
  return (
    <li className='group'>
      <a
        href={`#${reference}`}
        className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavMobile;
