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
  const navbarBackground = isTopOfPage ? '' : 'bg-darker';
  const navbarColorText = isTopOfPage ? 'text-black' : '';
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const movilClass = isDesktop ? '' : 'z-20 w-full fixed top-0 py-2'
  const desktopClass = isDesktop ? 'z-20 w-full sticky top-0 mt-6 py-4' : ''

  return (
    <header className={`${navbarBackground} ${desktopClass}${movilClass}`}>
      <nav className='flex items-center justify-between mx-auto w-5/6'>
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <ul className='flex justify-evenly flex-wrap  gap-8'>
              {links.map((link) => (
                <li className={`${navbarColorText} font-bold text-white hover:text-indigo transition duration-500`} key={link.name}>
                  <Link to={link.url}>{ link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button
            type='button'
            className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt='menu-icon' src={openMenuIcon} />
          </button>
        )}
        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
        <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button type='button' onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt='close-icon' src={closeNenuIcon} />
            </button>
          </div>
          {/* MENU ITEMS */}
          <ul className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
            {links.map((link) => (
              <li className='font-bold text-white hover:text-purple transition duration-500`' key={link.name}>
                <Link to={link.url}>{ link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        )}
      </nav>
    </header>
  )
}

export default Header
