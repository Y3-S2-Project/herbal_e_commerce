import './login.css'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import animationData from '../../../assets/helloAnimation.json'
import Lottie from 'react-lottie'
import TopNav from '../../../components/topnav/TopNav'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router-dom'
export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [userRole, setUserRole] = useState('')
  //
  // const [useLocation, setUserLocation] = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/auth/login', { email, password })
      .then(function (res) {
        if (res.status === 200) {
          localStorage.setItem('role', res.data.data.user.role)
          localStorage.setItem('token', res.data.data.access_token)
          localStorage.setItem('name', res.data.data.user.name.first_name)
          localStorage.setItem('authenticated', true)

          setEmail('')
          setPassword('')
          if (res.data.data.user.role === 'ADMIN') {
            navigate('../admin/dashboard')
          } else if (res.data.data.user.role === 'COMPANY') {
            navigate('../user/dashboard')
          } else if (res.data.data.user.role === 'CUSTOMER') {
            navigate('../user/dashboard')
          }
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Logged in successfully!',
          //   showConfirmButton: false,
          //   timer: 2000,
          // }).then(() => {
          //   console.log(userRole)
          // })
        }
      })
      .catch(function (error) {
        // handle error
        Swal.fire({
          icon: 'error',
          title: 'Failed to login!',
          showConfirmButton: false,
          timer: 2000,
        })
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }

  return (
    <>
      <TopNav />
      <Container className="mt-5">
        <Row>
          <Col>
            <Lottie options={defaultOptions} height={300} width={300} />
          </Col>
          <Col>
            <Form className="mt-5 " onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-75 ms-5" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 w-75 ms-5" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form.Group>
              <Form.Group className="text-center  mt-3" controlId="formBasicCheckbox">
                <Form.Text className="text-primary">
                  <Nav.Link>Not a member? Let's Sign Up!</Nav.Link>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
