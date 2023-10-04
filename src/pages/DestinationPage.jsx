import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import data from '../data.json'

function DestinationPage () {
  const [selectedDestination, setSelectedDestination] = useState(data.destinations[0])

  return (
    <main className='md:px-[39px] lg:px-[90px] xl:px-[167px] bg-bgDestinationMobile md:bg-bgDestinationTablet lg:bg-bgDestinationDesktop bg-fixed bg-cover min-h-screen'>
      <div className='flex flex-col lg:flex-row lg:justify-between md:pt-[162px] xl:pt-[212px] pb-10'>
        <div className='h-[300px] md:h-96 lg:h-auto space-y-14 lg:w-[600px] md:space-y-10 lg:space-y-20 xl:space-y-24'>
          <div className=' flex flex-col items-center lg:items-left'>
            <h2 className='md:self-start  font-["Barlow_Condensed"] text-sm md:text-[20px] lg:text-xl text-white tracking-[2.70px] lg:tracking-[7.62px] uppercase'> <span className='pr-[18px] lg:pr-[28px] text-white/25 font-bold'>01</span> Pick your destination</h2>
          </div>
          <div className='flex items-center justify-center'>
            <AnimatePresence mode='wait'>
              <motion.img
                className='z-0 md:z-auto w-40 md:w-60 lg:w-auto h-auto'
                src={selectedDestination.images.webp}
                alt='planet image'
                key={selectedDestination ? selectedDestination.name : 'empty'}
                easeInOut
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className='lg:w-[445px] flex flex-col gap-5 lg:gap-7 items-center lg:items-start xl:pt-[50px]'>
          <nav>
            <ul className='flex gap-5 lg:gap-10'>
              {data.destinations.map((destination) => (
                <li
                  key={destination.name}
                  className='font-["Barlow_Condensed"] text-[14px] lg:text-sm text-white tracking-[2.70px] uppercase relative cursor-pointer'
                  onClick={() => setSelectedDestination(destination)}
                >
                  {destination.name}
                  {destination === selectedDestination
                    ? (
                      <motion.div className='absolute -bottom-3 left-0 right-0 h-[3px] bg-white' layoutId='underline' />
                      )
                    : null}
                </li>

              ))}
            </ul>
          </nav>
          <div
            className='flex flex-col justify-between divide-y-[1px] divide-white/25 h-full'
          >
            <div className='text-center lg:text-left lg:h-fit pb-8 lg:pb-0 xl:space-y-5'>
              <AnimatePresence mode='wait'>
                <motion.h2
                  className='text-center lg:text-left text-3xl lg:text-4xl text-white uppercase'
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ x: 0, opacity: 0.3 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0.6 }}
                  transition={{ duration: 0.1 }}
                >
                  {selectedDestination ? selectedDestination.name : null}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  className='text-[15px] md:lg:text-sm lg:text-base text-skyBlue max-w-[327px] md:max-w-[560px] lg:max-w-none'
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ x: 0, opacity: 0.3 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0.6 }}
                  transition={{ duration: 0.1 }}
                >
                  {selectedDestination.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <div
              className='flex flex-col md:flex-row items-center gap-7 lg:gap-0 justify-around lg:justify-between p-10 lg:p-0 lg:pt-5 '
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  className='text-center lg:text-left space-y-[12px]'
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ y: 0, opacity: 0.1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0.1 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className='font-["Barlow_Condensed"] text-[14px] text-skyBlue tracking-[2.36px] uppercase'>Avg. Distance</span>
                  <p className='font-["Bellefair"] text-xl text-white uppercase'>{selectedDestination.distance}</p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.div
                  className='text-center lg:text-left space-y-[12px]'
                  key={selectedDestination ? selectedDestination.name : 'empty'}
                  initial={{ y: 0, opacity: 0.1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 0.1 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className='font-["Barlow_Condensed"] text-[14px] text-skyBlue tracking-[2.36px] uppercase'>Est. travel time</span>
                  <p className='font-["Bellefair"] text-xl text-white uppercase'>{selectedDestination.travel}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DestinationPage
