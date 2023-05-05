import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';

// import companyImage from '../../assets/vocces.png'
// import imageProfile from '../../assets/profile-image.png'
import dataAboutMe from './aboutMeData'

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section className='py-10 px-10 w-/6 bg-white shadow my-20 mx-auto h-5/6'>
      <svg id='progress' width='100' height='100' viewBox='0 0 100 100' className='fixed top-20 left-20 transform -rotate-90 '>
        <circle
          cx='50'
          cy='50'
          r='30'
          pathLength='1'
          opacity='0.3'
          className=' fill-none opacity-75 stroke-grey stroke-[12px]'
        />
        <motion.circle
          cx='50'
          cy='50'
          r='30'
          pathLength='1'
          className='stroke-green fill-none opacity-25 stroke-[12px]'
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} className='flex list-none h-300 overflow-x-scroll p-20'>
        {dataAboutMe.map((job) => (
          <li className='flex-none w-300 min-w-full before:items-center mr-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <div className='flex flex-row'>

              <img className='object-cover  rounded-t-lg h-96 ' src={job.img} alt='' />
              <div className='flex flex-col w-6/6 justify-between p-4 '>

                <h2 className='mb-2 text-2xl font-bold  text-gray-900 dark:text-white'>{ job.jobTitle }</h2>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white'>{job.company}</h3>
                <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white'>{job.duration}</h4>
                <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white'>{job.jobDescription}</h4>
                {job.projects.map((project) => (
                  <>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.projetcTitle}</p>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.technologies}</p>
                  </>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutMe
