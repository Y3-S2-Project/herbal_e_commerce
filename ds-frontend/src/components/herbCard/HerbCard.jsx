import { Container, Row, Col } from 'react-bootstrap'
import DrugsImage from '../../assets/images/landing-page/drugs-image.png'
import './herbCard.scoped.css'
export default function HerbCard() {
  return (
    <>
      <Container className="herb-card">
        <Row>
          <Col
            style={{
              width: '253px',

              display: 'flex',
              justifyContent: 'center',
              zIndex: '2',
            }}
          >
            <img
              src={DrugsImage}
              className="mb-n2 ms-n2 "
              style={{
                marginTop: '-1px',
                alignSelf: 'flex-right',
                width: '100px',
                height: '100px',
                zIndex: '3',
                transform: 'translateY(-50%)',
              }}
              alt="Drugs"
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
