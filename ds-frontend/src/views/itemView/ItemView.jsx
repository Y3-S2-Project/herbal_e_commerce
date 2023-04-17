import React from 'react'
import SideDrawerItem from '../../components/sideDrawerItem/SideDrawerItem'
import { TopNav } from '../../components'
import { Button, Col, Container, Row } from 'react-bootstrap'
import HerbCard from '../../components/herbCard/HerbCard'
import './itemView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

export default function ItemView() {
  return (
    <>
      <TopNav />
      <SideDrawerItem />
      <Container className="item-container">
        <Row>
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
        </Row>
        <Row className="tw-mt-10">
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
          <Col sm>
            <HerbCard />
          </Col>
        </Row>
      </Container>
      <Button variant="primary load-more-btn">
        <FontAwesomeIcon icon={faSync} className="me-2" /> Load More
      </Button>
    </>
  )
}
