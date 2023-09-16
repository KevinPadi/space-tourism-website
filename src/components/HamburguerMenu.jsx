import { useState } from 'react'

function HamburgerMenu () {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className='md:hidden z-0'>
      <div className='' onClick={toggleModal}>
        {modalOpen
          ? <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21'><g fill='#D0D6F9' fillRule='evenodd'><path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' /><path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' /></g></svg>
          : <svg className='z-20' xmlns='http://www.w3.org/2000/svg' width='24' height='21'><g fill='#D0D6F9' fillRule='evenodd'><path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' /></g></svg>}
      </div>
      {modalOpen && (
        <div className='fixed inset-0' onClick={toggleModal}>
          <div className='flex flex-col items-left gap-5 pt-[100px] pl-[32px] ml-auto h-full w-[254px] text-DarkBlue bg-White bg-[#ffffff0a] backdrop-blur-[40px]'>
            <a href='#' className='uppercase w-full flex items-center gap-[11px] border-r-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
              <span className='font-bold'>00</span> Home
            </a>
            <a href='#' className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
              <span className='font-bold'>01</span> Destination
            </a>
            <a href='#' className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
              <span className='font-bold'>02</span> Crew
            </a>
            <a href='#' className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
              <span className='font-bold'>03</span> Technology
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
