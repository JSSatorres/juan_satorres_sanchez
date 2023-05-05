import React, {
  createContext, useEffect, useState, useMemo,
} from 'react';

export const positionContext = createContext()

function PositionProvider({ children }) {
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [selectedPage, setSelectedPage] = useState('description')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('description');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeSelectedPage = (value) => {
    setSelectedPage(value)
  }
  const checkIsTopOfPage = (value) => {
    setIsTopOfPage(value)
  }
  const value = useMemo(() => ({
    isTopOfPage,
    selectedPage,
    changeSelectedPage,
    checkIsTopOfPage,
  }), [isTopOfPage, selectedPage, changeSelectedPage, checkIsTopOfPage]);

  return (
    <positionContext.Provider value={value}>
      {children}
    </positionContext.Provider>
  )
}

export default PositionProvider
