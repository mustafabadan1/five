import React from 'react';

export const You = () => {
  return (
    <>
      <Background />
      <Title />
    </>
  );
};

function Background() {
  return (
    <div
      className='absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-[#0B1120]'
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: '86.125rem',
      }}
    >
      <div
        className='absolute inset-0 bg-grid-slate-400/[0.05] bg-bottom border-b border-slate-100/5'
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
    </div>
  );
}

function Title() {
  return (
    <div className='relative max-w-5xl mx-auto my-auto pt-20 sm:pt-24 lg:pt-32'>
      <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white'>
        Rapidly build a clone of Tailwinds landing page with Code Hike.
      </h1>
      <p className='mt-6 text-lg  text-center max-w-3xl mx-auto text-slate-400'>
        A utility-first CSS framework packed with classes like{/* */}{' '}
        <code className='font-mono font-medium text-sky-400'>flex</code>,{' '}
        <code className='font-mono font-medium text-sky-400'>pt-4</code>,{' '}
        <code className='font-mono font-medium text-sky-400'>text-center</code>{' '}
        and{' '}
        <code className='font-mono font-medium text-sky-400'>rotate-90</code>{' '}
        that can be composed to build any design, directly in your markup.
      </p>
    </div>
  );
}
