import React from 'react'
import CartItem from '../../components/cartItem/CartItem'
import { TopNav } from '../../components'
import { Col, Container, Row } from 'react-bootstrap'
import './shoppingCart.css';

export default function ShoppingCart() {
  return (
    <>
      <TopNav />
      <h1 className="tw-font-bold tw-mx-4 tw-my-2 tw-text-2xl ">Shopping Cart</h1>
      <div className="tw-flex tw-justify-end tw-items-end tw-text-right tw-max-w-3xl tw-mx-auto tw-p-1 tw-flex-col">
        <a href="#" class="tw-text-red-500 tw-font-bold">
          Remove
        </a>
      </div>
      <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <br />
      <div className="tw-max-w-3xl tw-mx-auto">
        <hr className="tw-border-t tw-border-gray-800 tw-dark:border-gray-300 tw-h-px tw-w-full tw-my-3" />
      </div>
      <div className="tw-justify-end tw-max-w-3xl tw-mx-auto tw-p-1 tw-flex-col tw-items-end ">
        {/* Display total price */}
        {/* <p>Total Price: $25000</p>
        <br />
        <a
          href="#"
          className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-mt-1 tw-self-end tw-ml-auto tw-text-right"
        >
          Checkout
        </a> */}
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <Row className="tw-font-bold">Sub Total</Row>
              <Row className="tw-text-gray-400">2 Items</Row>
            </Col>
            <Col className="tw-text-right tw-font-bold tw-text-2xl">$25000</Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col className="tw-flex tw-justify-end">
              <a
                href="#"
                className="checkout-btn tw-text-right tw-text-white tw-py-1 tw-px-4 tw-rounded-lg tw-mt-1 "
              >
                Checkout
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
