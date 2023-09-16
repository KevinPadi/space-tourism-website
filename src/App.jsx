import HamburgerMenu from './components/HamburguerMenu'

function App () {
  return (
    <div className='w-full h-screen bg-bgHomeMobile sm:bg-bgHomeTablet lg:bg-bgHomeDesktop bg-no-repeat bg-cover overflow-hidden'>
      <header className='relative h-[96px] text-white lg:mt-[40px] ml-[39px] mr-[26px] md:mr-0 lg:ml-[55px] flex justify-between items-center'>
        <div className=' w-[48px] h-[48px] '>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
            <g fill='none' fillRule='evenodd'>
              <circle cx='24' cy='24' r='24' fill='#FFF' />
              <path fill='#0B0D17' d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z' />
            </g>
          </svg>
        </div>
        <div className='hidden lg:block flex-1 relative h-full'>
          <div className='absolute top-1/2 -right-[30px] w-full z-20 h-[1px] bg-white/25 max-w-[473px]' />
        </div>
        <div className='w-[450px] lg:w-[700px] xl:w-[830px] h-full bg-[#ffffff0a] backdrop-blur-[40px] hidden sm:flex items-center justify-center'>
          <nav className='flex sm:gap-10 gap-[48px] h-full align-middle'>
            <a href='#' className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>00</span> Home
            </a>
            <a href='#' className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>01</span> Destination
            </a>
            <a href='#' className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>02</span> Crew
            </a>
            <a href='#' className='uppercase h-full flex items-center gap-[11px] border-b-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold hidden lg:block'>03</span> Technology
            </a>
          </nav>
        </div>
        <HamburgerMenu />
      </header>
    </div>

  )
}

export default App
