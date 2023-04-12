import React from 'react';
;
import Desc from '../../../components/Desc';
// import Hero, { You } from '@/components/Hero';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';

const Homepage = () => {
  return (
    <main className=' bg-slate-900'
      
    >
      {/* //*header */}
<Header/>
      {/* //*content */}
      <div className='w-full h-screen relative'>
        {/* //*social, hero, scroll */}
{/* <You/> */}
<Hero/>
        {/* //*desc */}
        <Desc />
      </div>
    </main>
  );
};

export default Homepage;
