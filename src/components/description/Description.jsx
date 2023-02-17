// import SocialMediaIcons from '../components/SocialMediaIcons'
import React from 'react'
import { motion } from 'framer-motion'

import useMediaQuery from '../../hooks/useMediaQuery'
import imageProfile from '../../assets/images/profile-image.png'
import SocialMediaIcons from '../socialMediaIcons'

const Description = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')
  return (
    <section
      id='description'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      <div className='basis-3/5 mt-12 md:mt-0 flex justify-center md:order-2'>
        {isAboveLarge ? (
          <div
            className='relative ml-10 '
          >
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500  w-full max-w-[400px] md:max-w-[600px] rounded-[20px]'
              src={imageProfile}
            />
          </div>
        ) : (
          <img
            alt='profile'
            className='w-full max-w-[400px] md:max-w-[600px]  rounded-[40px] shadow-xl mb-10'
            src={imageProfile}
          />
        )}
      </div>
      <div className='z-30 basis-4/5 mt-12 md:mt-20'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-5xl font-playfair text-center md:text-start'>
            Juan Sánchez Satorres
          </p>
          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            I am a Technical Industrial Engineer in Industrial
            Design and a passionate of software technologies,
            open-source that has moved to the world of web
            development. Full-Stack profile and comfortable in
            both frontend and backend with the latest
            technologies.
          </p>
        </motion.div>
        <motion.div
          className='flex  justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='bg-cover bg-center px-3 my-0 rounded-3xl h-12 flex items-center shadow-2xl' style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, #e1e7ec29, #6bb7ee60, #b3c5d39f, #ebf8ffb2)', backdropFilter: 'blur(20px)' }}>
            <SocialMediaIcons />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Description
