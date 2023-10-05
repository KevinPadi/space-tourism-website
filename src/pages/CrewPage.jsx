import { React, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../data.json'
import douglasImage from '../assets/crew/image-douglas-hurley.webp'
import markImage from '../assets/crew/image-mark-shuttleworth.webp'
import victorImage from '../assets/crew/image-victor-glover.webp'
import anoushehImage from '../assets/crew/image-anousheh-ansari.webp'

function CrewPage () {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0])
  let selectedImage

  switch (selectedCrew.name) {
    case 'Douglas Hurley':
      selectedImage = douglasImage
      break
    case 'Mark Shuttleworth':
      selectedImage = markImage
      break
    case 'Victor Glover':
      selectedImage = victorImage
      break
    case 'Anousheh Ansari':
      selectedImage = anoushehImage
      break
    default:
      selectedImage = douglasImage // Fallback image
  }

  return (
    <main className='md:px-[39px] lg:px-[90px] xl:px-[167px] bg-bgCrewMobile md:bg-bgCrewTablet lg:bg-bgCrewDesktop bg-fixed bg-cover min-h-screen'>
      <div className='flex flex-col justify-between gap-20 lg:gap-0 lg:flex-row lg:justify-between min-h-screen'>
        <div className='space-y-8 lg:space-y-'>
          <div className='flex flex-col items-center lg:items-left md:pt-[162px] xl:pt-[212px]'>
            <h2 className='md:self-start  font-["Barlow_Condensed"] text-sm md:text-[20px] lg:text-xl text-white tracking-[2.70px] lg:tracking-[7.62px] uppercase'> <span className='pr-[18px] lg:pr-[28px] text-white/25 font-bold'>02</span>Meet your crew</h2>
          </div>
          <div className='space-y-4 lg:pt-32'>
            <div className='text-center lg:text-left'>
              <AnimatePresence mode='wait'>
                <motion.p
                  className='text-white/50 text-sm md:text-[24px] lg:text-[32px] font-["Bellefair"] uppercase'
                  key={selectedCrew ? selectedCrew.name : 'empty'}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedCrew.role}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.h3
                  className='text-white text-[24px] md:text-[40px] lg:text-3xl  font-["Bellefair"] uppercase'
                  key={selectedCrew ? selectedCrew.name : 'empty'}
                  initial={{ y: -50, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >{selectedCrew.name}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>
          <div className='w-[327px] md:w-[458px] lg:w-[455px] mx-auto lg:mx-0'>
            <motion.p
              className='text-skyBlue text-[15px] md:text-sm lg:text-lg leading-[26px] md:leading-[28px] lg:leading-[32px] text-center lg:text-left'
              key={selectedCrew ? selectedCrew.name : 'empty'}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedCrew.bio}
            </motion.p>
          </div>
          <div className='pt-20 pb-10'>
            <nav>
              <ul className='flex justify-center lg:justify-start items-center gap-5'>
                {data.crew.map((member) => (
                  <li
                    key={member.name}
                    className='flex items-center cursor-pointer'
                    onClick={() => setSelectedCrew(member)}
                  >
                    <div className='w-4 h-4 bg-white/25 hover:bg-white/50 transition-colors duration-150 rounded-full' />
                    {member === selectedCrew
                      ? (
                        <motion.div className='absolute w-4 h-4 bg-white rounded-full' layoutId='underline' transition={{ duration: 0.1 }} />
                        )
                      : null}
                  </li>

                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex justify-center lg:items-end'>
          <div className='w-80 md:w-96 lg:w-auto flex justify-center'>
            <motion.img
              className=' h-auto'
              src={selectedImage}
              alt='crew image'
              key={selectedCrew ? selectedCrew.name : 'empty'}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default CrewPage
