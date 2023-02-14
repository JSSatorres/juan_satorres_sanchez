import React from 'react'
import SocialMediaIcons from '../socialMediaIcons'

const Footer = () => (
  <footer className=' bg-primary py-6'>
    <div className='w-10/12 mx-auto'>
      <SocialMediaIcons />
      <div className='md:flex justify-center md:justify-between text-center '>
        <p className='font-playfair font-semibold text-2xl text-white'>
          JUAN SANCHEZ SATORRES
        </p>
        <a
          className='font-playfair text-md  text-white hover:opacity-50 transition duration-500'
          href='https://github.com/JSSatorres/portfolio'
          target='_blank'
          rel='noreferrer'
        >
          Code of this project
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
