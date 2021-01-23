import { useState, useEffect } from 'react'

function useWindowResizeHook(boundary: number): boolean {
  const [exceedBoundary, setIsExceedBoundary] = useState<boolean>(false)

  useEffect(() => {
    function setBound() {
      if (window.innerWidth <= boundary) {
        setIsExceedBoundary(true)
      } else {
        setIsExceedBoundary(false)
      }
    }

    setBound()

    function handleResize() {
      setBound()
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return exceedBoundary
}

export default useWindowResizeHook
