import './landing.css'
import './contactus.css'
import TopNav from '../../../components/topnav/TopNav'
import { Image } from 'react-bootstrap'
import Redivivus from '../../../assets/Redivivus.svg'
import { Container, Row, Col } from 'react-bootstrap'
import Lottie from 'react-lottie'
import animationData from '../../../assets/logo-animated.json'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import ContactUS from './contactuspic.png'
import validator from 'validator'
import BinRequestService from '../../../services/BinRequestServices'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'

export default function Landing() {
  const [emailError, setEmailError] = useState('')

  const [messagError, setMessageError] = useState('')
  const [nameError, setNameError] = useState('')

  const [isValidMail, setIsValidMail] = useState(false)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidMessage, setIsValidMessage] = useState(false)

  const [query, setQuery] = useState({ name: '', email: '', message: '' })

  const validateContactDetails = (name, input) => {
    setIsValidMail(true)
    setIsValidMessage(true)
    setIsValidName(true)

    if (name === 'email') {
      if (validator.isEmail(input)) {
        setIsValidMail(true)
        console.log('Checking email')
        setEmailError('Valid email')
      } else if (input.length === 0) {
        setIsValidMail(false)
        setEmailError('')
      } else {
        setEmailError('Invalid email, please use email as ex :- abc@gmail.com')
        setIsValidMail(false)
      }
    } else if (name === 'message') {
      if (input.length === 0) {
        setMessageError('')
        setIsValidMessage(false)
      } else if (input.length > 90) {
        setMessageError('Plase keep it simple and short , try a different message. ')
        setIsValidMessage(false)
      } else {
        setMessageError('Valid message')
        setIsValidMessage(true)
      }
    } else if (name === 'name') {
      if (input.length === 0) {
        setNameError('')
        setIsValidName(false)
      } else if (input.length > 40) {
        setNameError('Plase keep it simple and short , try a different name ')
        setIsValidName(false)
      } else {
        setNameError('Valid Name')
        setIsValidName(true)
      }
    }
  }
  const handleContactDetails = (e) => {
    const name = e.target.name
    const value = e.target.value
    validateContactDetails(name, value)

    setQuery((query) => {
      return { ...query, [name]: value }
    })
  }
  const sendQuery = (e) => {
    e.preventDefault()
    if (isValidMail && isValidMessage && isValidName) {
      console.log('sent')
      BinRequestService.setQueryDetails(query)
        .then((res) => {
          toast.success('Query sent successfully.', { position: toast.POSITION.TOP_RIGHT })
          setEmailError('')
          setMessageError('')
          setNameError('')
          setQuery((query) => {
            return { name: '', email: '', message: '' }
          })
        })
        .catch((err) => {
          toast.success('Query sent unsuccessful.')
        })
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <TopNav />
      <Container className="vh-100 vw-100">
        <Row className="justify-content-md-center welcome">
          <Col>
            <h2>Welcome to</h2>
          </Col>
        </Row>
        <Row></Row>
        <Row lg={3} className="justify-content-md-center body-content">
          <Col>
            <Image src={Redivivus} />
          </Col>
        </Row>
        <Row className="justify-content-md-center body-content">
          <Col>
            <h5>The best online garbage recycling platform</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Lottie options={defaultOptions} height={200} width={200} />
          </Col>
        </Row>

        <Row className="justify-content-md-center body-content">
          <Col>
            <Button>Get Started</Button>
          </Col>
        </Row>
      </Container>
      <Container className="vh-100 vw-100 " id="contact-us">
        {' '}
        <Row className="justify-content-md-center text-center">
          <Col>
            <h2 className="">Contact Us</h2>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img className="w-72.5 h-75" src={ContactUS} alt="contact_us" />
          </Col>
          <Col>
            <div className="card   mx-5 shadow-lg  mb-5 bg-white rounded-3 ">
              <div className="card-body px-5 vstack py-5 mx-5 needs-validation">
                <Row className="mb-4">
                  <Col sm={2}>
                    {' '}
                    <label className="form-label contact-us-labels">Name</label>
                  </Col>
                  <Col sm={4}>
                    <div className=" ">
                      <input
                        type="text"
                        name="name"
                        className="form-control contact-us-inputs bg-contact-us"
                        placeholder="ex:- chamath jaasekara"
                        value={query.name}
                        onChange={handleContactDetails}
                      />
                      <small
                        className={`mt-5 fw-bold ${isValidName ? 'text-success' : 'text-danger'}`}
                      >
                        {nameError}
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2}>
                    {' '}
                    <label className="form-label contact-us-labels ">Email address</label>
                  </Col>
                  <Col sm={4}>
                    {' '}
                    <div className=" ">
                      <input
                        type="email"
                        name="email"
                        onChange={handleContactDetails}
                        value={query.email}
                        className="form-control contact-us-inputs bg-contact-us"
                        placeholder="ex:- chamath@gmail.com"
                      />
                      <small
                        className={`mt-5 fw-bold ${isValidMail ? 'text-success' : 'text-danger'}`}
                      >
                        {emailError}
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={2}>
                    <label className="form-label contact-us-labels">Message</label>
                  </Col>
                  <Col sm={4}>
                    {' '}
                    <div className="textarea-input">
                      <textarea
                        rows={10}
                        className="form-control bg-contact-us"
                        name="message"
                        value={query.message}
                        onChange={handleContactDetails}
                        placeholder="ex:-  I Improving something  might help with using this application or I need to get contact with this site admin."
                      />
                      <small
                        className={`mt-5 fw-bold ${
                          isValidMessage ? 'text-success' : 'text-danger'
                        }`}
                      >
                        {messagError}
                      </small>
                    </div>
                  </Col>
                </Row>
                -
                <Row className="d-flex flex-row-reverse">
                  <Col>
                    <div>
                      <button
                        type="button"
                        className="btn contact-us-btn"
                        onClick={(e) => sendQuery(e)}
                      >
                        Success
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
