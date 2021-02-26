import { useState, useEffect } from 'react'

interface direction {
  height: 'innerHeight'
  width: 'innerWidth'
}

type ReturnType = number | undefined

export default function useWindowResizeHook(direction: keyof direction): ReturnType {
  const [curDimension, setCurDimension] = useState<ReturnType>(undefined)

  const dirMap: direction = {
    height: 'innerHeight',
    width: 'innerWidth'
  }

  useEffect(() => {
    setCurDimension(window[dirMap[direction]])

    function handleResize() {
      setCurDimension(window[dirMap[direction]])
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [direction])

  return curDimension
}
