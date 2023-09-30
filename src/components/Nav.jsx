import React from 'react'
import HamburgerMenu from './HamburguerMenu'
import { Link } from 'wouter'

function Nav () {
  return (
    <header className='md:absolute w-full  xl:top-[40px] h-[96px] text-white pl-[39px] lg:pl-[55px] mr-[26px] md:mr-0 flex justify-between items-center'>
      <div className=' w-[48px] h-[48px] '>
        <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
          <g fill='none' fillRule='evenodd'>
            <circle cx='24' cy='24' r='24' fill='#FFF' />
            <path fill='#0B0D17' d='M24 0c0 16-8 24-24 24   15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z' />
          </g>
        </svg>
      </div>
      <div className='hidden lg:block flex-1 relative h-full'>
        <div className='absolute top-1/2 -right-[30px] w-full z-20 h-[1px] bg-white/25 max-w-[473px]' />
      </div>
      <div className='w-[450px] lg:w-[700px] xl:w-[830px] h-full bg-[#ffffff0a] backdrop-blur-[40px] hidden md:flex items-center justify-center'>
        <nav className='flex gap-6 lg:gap-[48px] h-full align-middle'>
          <Link href='/'>
            <a href='../pages/HomePage' className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>00</span> Home
            </a>
          </Link>
          <Link href='/destination'>
            <a className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>01</span> Destination
            </a>
          </Link>
          <Link href='/crew'>
            <a className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>02</span> Crew
            </a>
          </Link>
          <Link href='/technology'>
            <a className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>03</span> Technology
            </a>
          </Link>
        </nav>
      </div>
      <HamburgerMenu />
    </header>
  )
}

export default Nav
