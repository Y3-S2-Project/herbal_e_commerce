import { Container, Row, Col, Button } from 'react-bootstrap'
import HerbCard from './HerbCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './hbList.scoped.css'
export default function HerbCardList() {
  return (
    <>
      <Container className="d-flex justify-content-between">
        <div className="d-flex align-items-center slider-btn-container justify-content-center">
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
          >
            <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#000000', width: '10px' }} />
          </Button>
        </div>

        <HerbCard />
        <HerbCard />
        <HerbCard />
        <div className="d-flex align-items-center justify-content-center slider-btn-container">
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
          >
            <FontAwesomeIcon icon={faAngleRight} style={{ color: '#000000' }} />
          </Button>
        </div>
      </Container>
    </>
  )
}
