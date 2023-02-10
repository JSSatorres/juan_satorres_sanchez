// import SocialMediaIcons from '../components/SocialMediaIcons'
import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../../hooks/useMediaQuery'
import imageProfile from '../../assets/profile-image.png'
import SocialMediaIcons from '../socialMediaIcons'

const Description = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')
  return (
    <section
      // id='home'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      {/* IMAGE SECTION */}
      <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        {isAboveLarge ? (
          <div
            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[200px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
          >
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[200px]'
              src={imageProfile}
            />
          </div>
        ) : (
          <img
            alt='profile'
            className='z-2 w-full max-w-[400px] md:max-w-[600px] rounded-t-[200px]'
            src={imageProfile}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* HEADINGS */}
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
          <p className='text-6xl font-playfair z-10 text-center md:text-start'>
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

        {/* CALL TO ACTIONS */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Description
