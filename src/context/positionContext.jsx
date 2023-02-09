import React, {
  createContext, useEffect, useState, useMemo,
} from 'react';

export const positionContext = createContext()

function PositionProvider({ children }) {
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [selectedPage, setSelectedPage] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectedPage = (value) => {
    setSelectedPage(value)
  }

  const value = useMemo(() => ({
    isTopOfPage,
    selectedPage,
    handleSelectedPage,
  }), [isTopOfPage, selectedPage, handleSelectedPage]);

  return (
    <positionContext.Provider value={value}>
      {children}
    </positionContext.Provider>
  )
}

export default PositionProvider
