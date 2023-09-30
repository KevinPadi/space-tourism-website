import { useState } from 'react'
import { Link } from 'wouter'

function HamburgerMenu () {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className='px-8 md:hidden z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
          <label htmlFor='hamburger' className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
            {modalOpen
              ? <svg onClick={toggleModal} xmlns='http://www.w3.org/2000/svg' width='20' height='21'><g fill='#D0D6F9' fillRule='evenodd'><path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' /><path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' /></g></svg>
              : <svg onClick={toggleModal} xmlns='http://www.w3.org/2000/svg' width='24' height='21'><g fill='#D0D6F9' fillRule='evenodd'><path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' /></g></svg>}
          </label>

          <div className='peer-checked:translate-x-0 translate-x-full transition duration-300 fixed inset-0 flex justify-end'>
            <div className='w-[calc(254px)] bg-[#ffffff0a] backdrop-blur-[40px]'>
              <div className='flex flex-col items-left gap-5 pt-[100px] pl-[32px] ml-auto'>
                <Link href='/'>
                  <a className='uppercase w-full flex items-center gap-[11px] border-r-4 border-white active:border-white hover:border-white/50 transition-all ease-in-out'>
                    <span className='font-bold'>00</span> Home
                  </a>
                </Link>
                <Link href='/destination'>
                  <a className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
                    <span className='font-bold'>01</span> Destination
                  </a>
                </Link>
                <Link href='/crew'>
                  <a className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
                    <span className='font-bold'>02</span> Crew
                  </a>
                </Link>
                <Link href='/technology'>
                  <a className='uppercase w-full flex items-center gap-[11px] transition-all ease-in-out'>
                    <span className='font-bold'>03</span> Technology
                  </a>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HamburgerMenu
