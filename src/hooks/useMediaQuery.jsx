import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)
  // console.log('query', query)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    // console.log('media', media)

    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    // console.log('listener', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
