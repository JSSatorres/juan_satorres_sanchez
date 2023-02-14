import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import usePosition from '../../hooks/usePostion'
import useMediaQuery from '../../hooks/useMediaQuery'
import openMenuIcon from '../../assets/menu-icon.svg'
import closeNenuIcon from '../../assets/close-icon.svg'

const links = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: 'projects' },
  { name: 'About me', url: 'aboutme' },
  { name: 'Contact', url: 'contact' },
]

const Header = () => {
  const { isTopOfPage } = usePosition()
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const headerHight = isTopOfPage ? 'h-14 text-lg' : 'h-8 text-base';
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isActive, setActive] = useState(0);

  const toggleClass = (index) => {
    setActive(index);
  };
  return (
    <header className='w-full  bg-primary fixed top-0 z-50 '>
      {isDesktop ? (
        <ul className={`flex ${headerHight}  flex-wrap gap-20 items-center mx-auto w-4/6 flex justify-between`}>
          {links.map((link, index) => (
            <li
              className='font-bold  text-contrast1  hover:text-hovertext active:text-activetext transition duration-500'
              key={link.name}
            >
              <Link
                className={isActive === index ? 'text-activetext transition duration-500' : ''}
                onClick={() => toggleClass(index)}
                to={link.url}
              >
                { link.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <button
          type='button'
          className={`w-full flex ${headerHight} items-center justify-end`}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt='menu-icon' src={openMenuIcon} className='h-8 mr-3' />
        </button>
      )}
      {!isDesktop && isMenuToggled && (
        <div className='fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]'>
          <div className='flex justify-start p-12'>
            <button type='button' onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt='close-icon' src={closeNenuIcon} />
            </button>
          </div>
          <ul className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
            {links.map((link) => (
              <li className='font-bold text-contrast1 ' key={link.name}>
                <Link to={link.url}>{ link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
