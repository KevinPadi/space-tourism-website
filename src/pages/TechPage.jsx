import { useState } from 'react'
import data from '../../data.json'
import { motion, AnimatePresence } from 'framer-motion'

function TechPage () {
  const [selectedTech, setSelectedTech] = useState(data.technology[0])
  const liClasses = 'text-white flex items-center justify-center w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] bg-transparent border-[1px] border-white/50 rounded-full'
  const liSelectedClasses = 'text-black flex items-center justify-center w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] bg-white border-[1px] border-white/50 rounded-full'
  return (
    <main className='bg-bgTechMobile md:bg-bgTechTablet lg:bg-bgTechDesktop bg-cover'>
      <div className='flex flex-col-reverse lg:flex-row pb-10 xl:pb-0 justify-between lg:pl-[105px] xl:pl-[165px] md:pt-[162px] xl:pt-[212px] min-h-screen'>
        <div className='flex flex-col space-y-20 lg:space-y-0 lg:gap-40 items-center lg:items-left'>
          <h2 className='self-start hidden lg:block font-["Barlow_Condensed"] text-sm md:text-[20px] lg:text-xl text-white tracking-[2.70px] lg:tracking-[7.62px] uppercase'>
            <span className='pr-[18px] lg:pr-[28px] text-white/25 font-bold'>03</span>Space launch 101
          </h2>
          <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between gap-20'>
            <nav className='flex lg:flex-col'>
              <ul className='flex flex-row lg:flex-col lg:text-2xl font-["Bellefair"] gap-10 lg:gap-6'>
                {data.technology.map((tech, index) => (
                  <li
                    key={tech.name}
                    className={tech.name === selectedTech.name ? liSelectedClasses : liClasses}
                    onClick={() => setSelectedTech(tech)}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex flex-col gap-5 lg:w-[350px] xl:w-[470px] 2xl:w-[470px] text-center justify-center lg:text-left'>
              <p className='font-["Barlow_Condensed"] text-[14px] lg:text-sm text-skyBlue tracking-[2.70px] uppercase'>The terminology...</p>
              <AnimatePresence mode='wait'>
                <motion.h3
                  className='text-white text-[24px] md:text-[40px] lg:text-3xl uppercase'
                  key={selectedTech ? selectedTech.name : 'empty'}
                  initial={{ x: 5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -5, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {selectedTech.name}
                </motion.h3>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  className='text-skyBlue text-[15px] md:tex-[16px] lg:text-base w-[327px] sm:w-[400px] xl:w-[400px] 2xl:w-[444px] break-words'
                  key={selectedTech ? selectedTech.name : 'empty'}
                  initial={{ x: 5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {selectedTech.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className='space-y-10 p-0 md:mt-20 h-full w-screen'>
          <h2
            className='sm:pl-10 w-fit mx-auto sm:mx-0 block lg:hidden font-["Barlow_Condensed"] text-sm md:text-[20px] lg:text-xl text-white tracking-[2.70px] lg:tracking-[7.62px] uppercase'
          >
            <span className='pr-[18px] lg:pr-[28px] text-white/25 font-bold'>03</span>Space launch 101
          </h2>
          <AnimatePresence mode='wait'>
            <motion.img
              className='hidden lg:block mr-0 ml-auto'
              src={selectedTech.images.portrait}
              alt='tech image'
              key={selectedTech ? selectedTech.name : 'empty'}
              initial={{ x: -10, opacity: 0.1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0.1 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            <motion.img
              className='visible lg:hidden w-full max-w-none mr-0 ml-auto'
              src={selectedTech.images.landscape}
              alt='tech image'
              key={selectedTech ? selectedTech.name : 'empty'}
              initial={{ x: 10, opacity: 0.1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0.1 }}
              transition={{ duration: 0.1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default TechPage
