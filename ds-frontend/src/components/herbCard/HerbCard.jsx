import { Container, Row, Col } from 'react-bootstrap'
import DrugsImage from '../../assets/images/landing-page/drugs-image.png'
import './herbCard.scoped.css'
import Button from 'react-bootstrap/Button'
export default function HerbCard() {
  return (
    <>
      <Container className="herb-card tw-border-4 tw-border-[#EDEAE7] tw-rounded-lg tw-shadow-glow">
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
          <Col className="tw-flex tw-justify-end tw-mt-3">
            <i class="fas fa-star" style={{ color: 'darkgreen' }}></i>
            <small className="tw-ml-2" style={{ color: 'darkgreen' }}>
              {' '}
              5.5
            </small>
          </Col>{' '}
        </Row>
        <Row>
          <Col></Col>
          <Col className="tw-flex tw-justify-end">
            <span class="badge bg-danger  text-white  ">On Sale</span>
          </Col>{' '}
        </Row>
        <Row>
          <Col>Blackberry bluestem</Col>
        </Row>
        <Row className="mt-1">
          <Col className="mt-3">
            <Button variant="outline-dark">Add +</Button>
          </Col>
          <Col className=" ">
            <Row className="">
              <small className="tw-flex tw-justify-end">6.00</small>
            </Row>
            <Row>
              <small className="tw-flex tw-justify-end text-danger tw-font-bold">$ 6.00</small>
            </Row>
            <Row>
              <small className="tw-flex tw-justify-end">6.00</small>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
