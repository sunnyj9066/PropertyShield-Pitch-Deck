import { useCallback, useEffect, useState } from 'react'

export function useSlideNavigation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides || index === currentSlide) return
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    },
    [currentSlide, totalSlides],
  )

  const next = useCallback(() => {
    goTo(Math.min(currentSlide + 1, totalSlides - 1))
  }, [currentSlide, goTo, totalSlides])

  const prev = useCallback(() => {
    goTo(Math.max(currentSlide - 1, 0))
  }, [currentSlide, goTo])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(totalSlides - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev, goTo, totalSlides])

  const progress = ((currentSlide + 1) / totalSlides) * 100

  return { currentSlide, direction, next, prev, goTo, progress }
}
