import React from 'react'
import OrderCard from '../../components/orderCard/OrderCard'
import { TopNav } from '../../components'
import './orderView.scoped.css'
import { Col, Row } from 'react-bootstrap'

export default function OrderView() {
  return (
    <>
      <TopNav />
      <h1 className="tw-font-bold tw-text-2xl order-title">My Orders</h1>
      <Row>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
        <Col>
          <OrderCard />
        </Col>
      </Row>
    </>
  )
}
