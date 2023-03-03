import { Container, Row, Col } from 'react-bootstrap'
import DrugsImage from '../../assets/images/landing-page/drugs-image.png'
import './herbCard.scoped.css'
export default function HerbCard() {
  return (
    <>
      <Container className="herb-card">
        <Row>
          <Col className="position-relative">
            <img
              src={DrugsImage}
              className="position-absolute mb-n2 ms-n2 "
              style={{ width: '50%', marginTop: '-1px' }}
            />
          </Col>
          <Col></Col>{' '}
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>{' '}
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>{' '}
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>{' '}
        </Row>
      </Container>
    </>
  )
}
