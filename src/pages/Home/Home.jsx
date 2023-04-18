import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/navbar'
import Description from '../../components/description'
import Skills from '../../components/skills'
import Technologies from '../../components/technologies'
import LineGradient from '../../components/lineGradient'
import usePosition from '../../hooks/usePostion'
// import styles from './home.module.scss'
// import useMediaQuery from '../../hooks/useMediaQuery'
// import DotGroup from '../../components/dotGroup'

const Home = () => {
  const { changeSelectedPage } = usePosition()
  const componentsArray = [Description, Skills, Technologies]

  const handleSeletedPage = (value) => {
    changeSelectedPage(value)
  }

  return (
    <>
      <Navbar />
      <div id='home' className='py-10 px-10 w-5/6 bg-white shadow my-20 mx-auto'>
        {componentsArray.map((Component) => (
          <div key={Component.name}>
            <div className='w-5/6 mx-auto md:h-full'>
              <motion.div
                margin='0 0 -200px 0'
                amount='all'
                onViewportEnter={() => handleSeletedPage(Component.name)}
              >
                <Component
                  className=' bg-light'
                />
              </motion.div>
            </div>
            <LineGradient />
          </div>
        ))}
        {/* TODO: DotGroup  */}
      </div>
    </>
  )
}

export default Home
