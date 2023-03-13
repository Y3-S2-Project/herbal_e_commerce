import { Container, Row, Col, Button } from 'react-bootstrap'
import HerbCard from './HerbCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './hbList.scoped.css'
import { useRef, useState } from 'react'
export default function HerbCardList() {
  const containerRef = useRef(null) // Ref for the slider container
  const [scrollPos, setScrollPos] = useState(0) // State for the current scroll position

  const handleScrollLeft = () => {
    const containerWidth = containerRef.current.clientWidth
    const cardWidth = 250 // Assuming each card has a fixed width of 250px
    const newPosition = Math.max(scrollPos - containerWidth, 0)
    containerRef.current.style.transform = `translateX(-${newPosition}px)`
    console.log(newPosition)
    setScrollPos(newPosition)
  }

  const handleScrollRight = () => {
    const containerWidth = containerRef.current.clientWidth
    const cardWidth = 250 // Assuming each card has a fixed width of 250px
    const maxPosition = containerWidth - containerRef.current.scrollWidth
    const newPosition = Math.min(scrollPos + containerWidth, maxPosition)
    containerRef.current.style.transform = `translateX(-${newPosition}px)`
    console.log(newPosition)
    setScrollPos(newPosition)
  }

  const handleScroll = (event) => {


    if (event.type === 'mousemove' && !event.buttons) {
      // Ignore mousemove events if the left mouse button is not pressed
      return
    }

    const delta = event.deltaY || event.detail || 0
    const container = containerRef.current

    if (event.type === 'mousemove') {
      // Scroll the container horizontally based on the mouse movement
      container.scrollLeft -= event.movementX
    } else {
      // Scroll the container horizontally based on the wheel delta
      container.scrollLeft -= delta * 40
    }
  }

  return (
    <>
      <Container className="d-flex justify-content-between mt-4 herblist-container">
        <div className="d-flex align-items-center slider-btn-container justify-content-center me-3">
          <Button
            style={{
              backgroundColor: '#ffffff',
              width: '25px',
              height: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
            onClick={handleScrollLeft}
          >
            <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#000000', width: '10px' }} />
          </Button>
        </div>
        <div
          className="slider-container overflow-auto"
          ref={containerRef}
          onWheel={handleScroll}
          onMouseDown={() => {
            containerRef.current.addEventListener('mousemove', handleScroll)
          }}
          onMouseUp={() => {
            containerRef.current.removeEventListener('mousemove', handleScroll)
          }}
        >
          <div className="slider-track d-flex justify-content-between  align-items-center d-flex flex-nowrap">
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
            <HerbCard />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center slider-btn-container ms-3">
          <Button
            style={{
              backgroundColor: '#ffffff',
              width: '25px',
              height: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
            onClick={handleScrollRight}
          >
            <FontAwesomeIcon icon={faAngleRight} style={{ color: '#000000' }} />
          </Button>
        </div>
      </Container>
    </>
  )
}
