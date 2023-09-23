import React from 'react'

function HomePage () {
  return (
    <main>
      <div className='w-[327px] md:w-[450px] lg:w-full h-full mx-auto lg:px-[105px] xl:px-[165px] text-center flex flex-col lg:flex-row justify-around lg:justify-between lg:items-end pb-8 pt-10 md:pt-40 xl:pt-[187px] 2xl:pt-[387px] gap-10'>
        <div className='space-x-[16px] lg:space-x-[24px] space-y-3 text-center lg:text-left lg:w-[445px] '>
          <p className='pl-5 text-skyBlue font-["Barlow_Condensed"] text-sm md:text-[20px] lg:text-xl tracking-[2.70px] lg:tracking-[4.72px] uppercase'>So, you want to travel to</p>
          <h1 className='text-skyBlue text-[80px] text-center md:text-5xl uppercase'>Space</h1>
          <p className='text-[15px] md:text-[16px] lg:text-base font-["Barlow"] text-skyBlue'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className=' transition-shadow duration-300 hover:shadow-[0px_1px_0px_100px_rgba(255,255,255,0.15)] cursor-pointer relative flex items-center justify-center w-[150px] md:w-[242px] md:h-[242px] h-[150px] bg-white rounded-full mx-auto lg:mx-0 peer'>
          <a className='font-["Bellefair"] text-[20px] md:text-[32px] text-darkBlue tracking-[1.25px] uppercase' href='#'>Explore</a>
          <div className='absolute w-full h-full bg-white/60 rounded-full -z-10 peer-hover:scale-105' />
        </div>
      </div>
    </main>
  )
}

export default HomePage
