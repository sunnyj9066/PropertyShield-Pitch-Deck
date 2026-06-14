import { useCallback } from 'react'
import { slides } from '../data/slides'
import { useSlideNavigation } from '../hooks/useSlideNavigation'
import { AnimatedBackground } from './AnimatedBackground'
import { BottomNav } from './BottomNav'
import { ProgressBar } from './ProgressBar'
import { SlideRenderer } from './SlideRenderer'

export function SlideDeck() {
  const { currentSlide, direction, next, prev, goTo, progress } =
    useSlideNavigation(slides.length)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const isRightHalf = clickX > rect.width / 2

      if (isRightHalf) {
        next()
      } else {
        prev()
      }
    },
    [next, prev],
  )

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050810]">
      <AnimatedBackground />
      <ProgressBar progress={progress} />

      <div
        className="relative z-10 h-full w-full cursor-pointer"
        onClick={handleClick}
        role="presentation"
      >
        <SlideRenderer slide={slides[currentSlide]} direction={direction} />
      </div>

      <BottomNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
      />
    </div>
  )
}
