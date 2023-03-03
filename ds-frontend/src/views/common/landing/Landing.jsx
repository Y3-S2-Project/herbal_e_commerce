import './landing.css'

import TopNav from '../../../components/topnav/TopNav'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from 'react-bootstrap'
import firstCol from '../../../assets/images/landing-page/first-col.png'
import secondCol from '../../../assets/images/landing-page/second-col.png'
import HerbCardList from "../../../components/herbCard/HerbCardList";
import {faAngleRight, faUser} from "@fortawesome/free-solid-svg-icons";
export default function Landing() {


  return (
    <>
      <TopNav />
      <Container className="">
        <Row className="vh-50 pt-1 ">
          <Col className=""  xs={8}>
            {/* First column with width of 65% */}
           <img src={firstCol} height="100%" width="100%"/>
          </Col>
          <Col className="" xs={4}>
            {/* Second column with width of 35% */}
            <img src={secondCol} height="100%" width="100%" />
          </Col>
        </Row>
          <Row className="vh-50 mt-3">
              <Col className="" xs={6}  >
              <h2 className="fw-bold"> Trending Goods</h2>
              </Col>
              <Col className="d-flex justify-content-end align-items-center" xs={6}  >
         
                  <button
                      type="button"
                      className="btn  d-flex align-items-center  p-0"
    
                  >
                      <small className="me-2 fw-bold">View All</small>
                      <FontAwesomeIcon icon={faAngleRight} />
           
                  </button>
                
              </Col>
          </Row>
        <Row className="vh-50">
          <Col className="bg-danger" xs={12}  >
            <HerbCardList/>
          </Col>
        </Row>
      </Container>

    </>
  )
}
