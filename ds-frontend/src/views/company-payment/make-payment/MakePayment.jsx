import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import axios from 'axios'
import Swal from 'sweetalert2'
import PaymentService from '../../../services/PaymentService'

const MakePayment = () => {
  const [validated, setValidated] = useState(false)

  const [binRequests, setBinRequests] = useState([])
  const [paymentMethods, setPaymentMethods] = useState([])
  const [paymetMethodType, setPaymentMethodType] = useState('Credit Card')
  const current = new Date()
  const [form, setForm] = useState({
    amount: 0,
    cardNumber: '',
    paymentId: '',
    date: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,
    note: '',

    requestNo: '',
  })
  // const [error, setError] = useState({})

  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault()
    const inForm = e.currentTarget
    if (inForm.checkValidity() === false) {
      setValidated(true)
    } else {
 

        axios
          .post('http://localhost:3001/api/makePayment',form)
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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/pickupRequest/',config)
      .then(function (response) {
        const actualData = response.data.data.filter((oneRequest) => oneRequest['payment'] == null)
        setForm({ ...form, requestNo: actualData[0].requestNo })
        console.log(response.data.data,actualData)
        setBinRequests(actualData)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    axios
      .get('http://localhost:3001/api/paymentmethod/')
      .then(function (response) {
        console.log(response.data.data)
        const validPaymentMethods = response.data.data.filter(
          (onePaymentMethod) => onePaymentMethod.activeStatus == true,
        )
        setPaymentMethods(validPaymentMethods)
        const creditCardPaymentMethodS = response.data.data.filter(
          (onePaymentMethod) => onePaymentMethod.methodType == 'Credit Card',
        )
        const defaultCardNumber = creditCardPaymentMethodS[0].cardNumber
        setForm({ ...form, cardNumber: defaultCardNumber })
        console.log(form)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    setForm({})
    setValidated(false)
  }, [])

  return (
    <>
      <div className="row shadow-lg mb-5 rounded-3 mt-3">
        <div className="card p-4 form">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Payment Type :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select
                    value={paymetMethodType}
                    name="paymentType"
                    onChange={(e) => setPaymentMethodType(e.target.value)}
                  >
                    <option value="Credit Card" selected>
                      Credit Card
                    </option>
                    <option value="Debit Card">Debit Card</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Card. No. : </Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select value={form.cardNumber} name="cardNumber" onChange={handleInput}>
                    {paymetMethodType === 'Credit Card'
                      ? paymentMethods.map((oneMethod) => {
                          if (oneMethod.methodType === 'Credit Card') {
                            return (
                              <option key={oneMethod.cardNumber} value={oneMethod.cardNumber}>
                                {oneMethod.cardNumber}
                              </option>
                            )
                          }
                        })
                      : paymentMethods.map((oneMethod) => {
                          if (oneMethod.methodType === 'Debit Card') {
                            return (
                              <option key={oneMethod.cardNumber} value={oneMethod.cardNumber}>
                                {oneMethod.cardNumber}
                              </option>
                            )
                          }
                        })}
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Request ID :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select value={form.requestNo} name="requestNo" onChange={handleInput}>
                    {binRequests.map((binRequest) => {
                      return (
                        <option key={binRequest.requestNo} value={binRequest.requestNo}>
                          {binRequest.requestNo}
                        </option>
                      )
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Transaction Date :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control type="date" value={form.date} name="date" onChange={handleInput} />
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
                <Col md="12">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={form.note}
                    name="note"
                    style={{ resize: 'none' }}
                    placeholder="Leave a note"
                    onChange={handleInput}
                  />
                </Col>
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
export default MakePayment
