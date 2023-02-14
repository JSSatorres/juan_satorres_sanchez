/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import usePosition from '../../hooks/usePostion'
import useMediaQuery from '../../hooks/useMediaQuery'

const Link = ({ page }) => {
  const { selectedPage, changeSelectedPage } = usePosition()
  const lowerCasePage = page.toLowerCase()
  // const textcolor = isTopOfPage ? 'text-black' : 'text-white';
  console.log('aaaaaaaaaaaaaa', selectedPage);
  console.log('aaaaaaaaaaaaaa', lowerCasePage);
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} hover:text-activetext transition duration-500  `}
      href={`#${lowerCasePage}`}
      onClick={() => changeSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = () => {
  const { isTopOfPage, selectedPage, setSelectedPage } = usePosition()
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 75);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const links = ['Description', 'Skills', 'Technologies']
  return (
    <nav className='mt-32 w-full'>
      {/* <div className='flex items-center justify-between mx-auto w-5/6'> */}
      {/* <h4 className={`${hide} font-playfair text-2xl font-bold`}>JSS</h4> */}
      <div className={`${isSticky ? 'fixed top-8 shadow-md' : 'relative'} h-8 z-30 w-full flex justify-around bg-contrast1 text-sm font-semibold items-center`}>
        { links.map((link) => (
          <Link
            key={link}
            page={link}
          />
        ))}
        {/* </div> */}
      </div>
    </nav>
  )
}

export default Navbar
