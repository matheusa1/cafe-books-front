import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    setWindowSize((prevState) => ({ ...prevState, height: window.innerHeight }))
    setWindowSize((prevState) => ({ ...prevState, width: window.innerWidth }))

    window.addEventListener('resize', () => {
      setWindowSize((prevState) => ({
        ...prevState,
        height: window.innerHeight,
      }))
      setWindowSize((prevState) => ({
        ...prevState,
        width: window.innerWidth,
      }))
    })

    console.log('update')

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize((prevState) => ({
          ...prevState,
          height: window.innerHeight,
        }))
        setWindowSize((prevState) => ({
          ...prevState,
          width: window.innerWidth,
        }))
      })
    }
  }, [])

  return windowSize
}

export default useWindowSize
