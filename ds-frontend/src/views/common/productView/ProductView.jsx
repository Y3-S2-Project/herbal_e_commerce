import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../services/productService'
import { TopNav } from '../../../components'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/captioned.css'
import './productView.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
const buttonStyle = {
  borderRadius: '50%',
  backgroundColor: 'white',
  opacity: 0.7,
  fontSize: '20px',
  color: 'black',
  margin: '10px 10px',
}
const contentStyle = {
  color: 'white',
  fontSize: '20px',
}
const bgImg = {
  position: 'absolute',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}

const ProductView = () => {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
    console.log(product)
  }, [])

  const fetchData = async () => {
    try {
      let responseData = await getProductById(id)
      if (responseData?.data) {
        setProduct(...responseData.data)

        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  if (loading) {
    return (
      <div className="tw-flex tw-items-center tw-justify-center tw-p-8">
        <svg
          className="tw-w-12 tw-h-12 tw-animate-spin tw-text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    )
  }
  return (
    <>
      {' '}
      <TopNav />
      <Container className="tw-bg-white tw-mt-10 signle-product-view">
        <Col>
          <Row>
            <Col>
              <div onClick={() => window.history.back()} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faAngleLeft} />
                <small className="tw-ms-2 tw-fw-bold tw-text-4x">Go back </small>
              </div>
            </Col>

            <Col>
              {' '}
              <h1 className="tw-font-bold tw-text-3xl">{product?.pName}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6} style={{ backgroundColor: 'whitelightgray' }}>
              <AwesomeSlider
                organicArrows={false}
                buttonContentRight={<p style={buttonStyle}>{'>'}</p>}
                buttonContentLeft={<p style={buttonStyle}>{'<'}</p>}
                play
                // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                style={{
                  backgroundColor: 'white',
                }}
              >
                {product?.pImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt="" style={bgImg} />
                  </div>
                ))}
              </AwesomeSlider>
            </Col>

            <Col>
              <Row>
                <Col>
                  {' '}
                  <span>{product.pStatus}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Weight :</h2>
                </Col>
                <Col>{product?.pWeight} kg</Col>
              </Row>
              <Row>
                <Col>
                  <h2>Available Quantity :</h2>
                </Col>
                <Col>{product?.pQuantity} </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Brand :</h2>
                </Col>
                <Col>{product?.pQuantity} </Col>
              </Row>
              <Row>
                <div
                  className="item-add-component"
                  style={{ backgroundColor: 'red !important', borderRadius: '10px' }}
                >
                  {' '}
                  <AddItem product={product} />
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="tw-mt-16">
            <Col>
              <h1>Customer Reviews</h1>
            </Col>
            <Col>
              <h2 className="tw-font-bold tw-text-2xl">Description</h2>
              <div>
                <p>{product?.pDescription}</p>
                <p>
                  {' '}
                  Based on the error message, the issue is likely with one of the imports in your
                  code. The error message suggests that one of the components you're importing is
                  not being exported correctly, or there may be an issue with the way the component
                  is being imported. However, looking at the code you provided, I don't see any
                  obvious import issues. It's possible that the issue is in one of the imports
                  you're not showing here, or there may be an issue elsewhere in your code. To
                  further diagnose the issue, you can try commenting out parts of your code and
                  gradually adding them back in until you find the source of the error.
                  Additionally, you can try looking for typos or other syntax errors in your code.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}

const AddItem = () => {
  return (
    <Col>
      <p></p>
    </Col>
  )
}
export default ProductView
