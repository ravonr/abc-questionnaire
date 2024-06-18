import { RefObject, useEffect, useRef, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

const useContainerDimensions = (): [RefObject<HTMLDivElement>, Dimensions] => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return [containerRef, dimensions]
}

export default useContainerDimensions
