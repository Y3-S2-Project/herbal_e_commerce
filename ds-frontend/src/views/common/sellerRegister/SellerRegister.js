import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import axios from 'axios'
import Swal from 'sweetalert2'
import { TopNav } from '../../../components'
const SellerRegister = () => {
  const [validated, setValidated] = useState(false)

  const current = new Date()
  const [form, setForm] = useState({
    user: {
      role: 'COMPANY',
      name: {
        first_name: '',
        last_name: '',
      },
      email: '',
      password: '',
      phone: '',
      address: '',
    },
    specificData: {
      companyName: '',
      companyEmail: '',
    },
  })

  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault()
    const inForm = e.currentTarget
    if (inForm.checkValidity() === false) {
      setValidated(true)
    } else {
      axios
        .post('http://localhost:3001/api/auth/register', form)
        .then(function (response) {
          Swal.fire({
            icon: 'success',
            title: 'Request successfully sent!',
            showConfirmButton: false,
            timer: 2000,
          })
          setForm({})
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })

      setValidated(false)
    }
  }
  const handleInput = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name === 'amount') {
      value = Number(value)
    }
    setForm({
      ...form,
      ['paymentId']: `PAYID${Math.floor(Math.random() * 10000 + 1)}`,
      [name]: value,
    })
    console.log(form)
  }

  return (
    <>
      <TopNav />
      <div className="row shadow-lg mb-5 rounded-3  m-5">
        <div className="card p-4 form">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Payment Type :</Form.Label>
                </Col>
                <Col md="8">
                  {' '}
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                    onChange={handleInput}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Card. No. : </Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                    onChange={handleInput}
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Request ID :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                    onChange={handleInput}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Transaction Date :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                    onChange={handleInput}
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Amount :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                    onChange={handleInput}
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                <Col md="12"></Col>
              </Form.Group>
            </Row>
            <Col md="12" className="d-flex justify-content-end">
              {/* <Button>Reset</Button> */}
              <Button
                type="reset"
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '5%' }}
              >
                Clear
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '1.25%' }}
              >
                Add
              </Button>
            </Col>
          </Form>
        </div>
      </div>
    </>
  )
}
export default SellerRegister
