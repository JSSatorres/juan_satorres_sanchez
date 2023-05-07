import React from 'react'
import { motion } from 'framer-motion'
import LineGradient from '../lineGradient'
import dataSkills from './skillsdata'
// import useMediaQuery from '../../hooks/useMediaQuery'
import skillImage from '../../assets/images/skills-image.png'
import pict from '../../assets/icons/undraw_product_iteration_kjok.svg'

const MySkills = () => (
  <section id='skills' className='pt-10 pb-24'>
    {/* HEADER AND IMAGE SECTION */}
    <div className='md:flex md:justify-between md:gap-16 mt-32 mb-10 w-full '>
      <motion.div
        className='w-full'
        initial='hidden'
        initial='hidden'
        whileInView='visible'
          // whileHover={{
          //   scale: 1.2,
          //   transition: { duration: 1 },
          // }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className='font-playfair font-semibold text-4xl mb-5'>
          MY
          {' '}
          <span className='text-primary'>SKILLS</span>
        </p>
        {/* <LineGradient width='w-1/3' /> */}
      </motion.div>
    </div>

    { dataSkills.map((skill, index) => (
      <motion.div
        key={skill.title}
        className=''
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='my-20'>
          <p className='font-playfair font-semibold text-3xl mt-8 mb-10 text-center'>
            {skill.title}
          </p>
          <div className={`flex flex-col sm:flex-row w-full ${index % 2 === 1 ? 'sm:flex-row-reverse ' : ''} `}>
            <div className=' w-full'>
              <p className='mt-1'>
                {skill.description}
              </p>
            </div>
            <div className={`mt-2 ml-10  w-full ${index % 2 === 1 ? 'sm:ml-0 sm:mr-20' : ''} `}>
              <img src={pict} alt='skill' className='mt-10 sm:mt-5' />
            </div>
          </div>
        </div>
      </motion.div>
    ))}
    <div className='md:flex md:justify-between mt-16 gap-32' />
  </section>
)

export default MySkills
