import { data } from 'autoprefixer'
import React, { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_w88_h95.png'
import BinRequestServices from '../../services/BinRequestServices'
import './viewonepayment.scoped.css'
const ViewOnePayment = () => {
  const [binData, setBinData] = useState({})
  const [payment, setPayment] = useState({})
  const [requestReceivedBy, setRequestReceivedBy] = useState({})

  const [requestedBy, setRequestedBy] = useState({})
  const [wasteTypes, setWasteTypes] = useState([])
  const [customerAddress, setCutomserAddress] = useState([])
  const [companyAddress, setCompanyAddress] = useState([])
  const [decision2, setDecision2] = useState('')
  const params = useParams()
  const location = useLocation()

  const [decision, setDecision] = useState('')
  useEffect(() => {
    console.log(params.id)
    BinRequestServices.getOneBinRequest(params.id)
      .then((resp) => {
        setBinData(resp.data.data)
        setPayment(resp.data.data.payment)
        setRequestReceivedBy(resp.data.data.requestReceivedBy)
        setRequestedBy(resp.data.data.requestedBy)
        setCutomserAddress(resp.data.data.requestedBy.address.split(','))
        setCompanyAddress(resp.data.data.requestReceivedBy.address.split(','))
        setWasteTypes(resp.data.data.wasteTypes)
        setDecision(location.pathname.toString().split('/')[1])
        setDecision2(location.pathname.toString().split('/')[2])
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return (
    <div
      className={`main bg-white w-100 view-payment shadow-lg mb-5 rounded-3 ${
        decision === 'user' ? 'user-view' : ''
      }`}
    >
      <div className="vstack gap-3">
        <div className="main w-80 mx-5 mt-5">
          <div className="">
            {(decision === 'admin' && decision2 === 'admin-company-payments') ||
            decision === 'user' ? (
              <h3>Company Payments - View Payment {payment.paymentId}</h3>
            ) : (
              <h3>Customer Payments - View Payment {payment.paymentId}</h3>
            )}
          </div>

          <hr className="" />
        </div>
        <div className="main vstack gap-3 rounded-3 border shadow-sm p-3 mb-5 bg-white rounded mx-5 ">
          {' '}
          <div className="main w-80 mx-5 ">
            <div className="navigate-payments d-flex justify-content-between mb-4">
              {decision === 'admin' && decision2 === 'admin-company-payments' ? (
                <Link to={`/${decision}/admin-company-payments`}>{`< `}Company Payments </Link>
              ) : decision === 'user' ? (
                <Link to={`/${decision}/payment`}>{`< `} Company Payments </Link>
              ) : (
                <Link to={`/${decision}/admin-company-payments`}>{`< `} Customer Payments </Link>
              )}

              <div>
                {' '}
                <h6>{binData.requestNo}</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between middle-font-styles">
              <div className="w-25 h-25   vstack">
                <h6>FROM :</h6>
                <p> {requestReceivedBy.name}</p>
                <small>{}</small>
                <small>
                  {companyAddress[0] + `,  `} {companyAddress[1]}
                </small>

                <small>{companyAddress[2]}</small>
                <small>{companyAddress[3]}</small>
                <small>{companyAddress[4]}</small>
              </div>
              <div className="w-25 h-25 ms-5 vstack">
                <h6>TO :</h6>
                <p>{requestedBy.customerName}</p>
                <small>
                  {customerAddress[0] + `,  `} {customerAddress[1]}
                </small>

                <small>{customerAddress[2]}</small>
                <small>{customerAddress[3]}</small>
                <small>{customerAddress[4]}</small>
              </div>{' '}
              <div className="w-25 h-25 ms-5 vstack">
                <h6>INFO :</h6>
                <p>Profit:{` ` + payment.currency + ` ` + payment.profit}</p>
                <small>Company Paid:{` ` + payment.currency + ` ` + payment.companyPaid}</small>
                <small>
                  Customer Earned:{` ` + payment.currency + ` ` + payment.customerEarned}
                </small>
              </div>
              <div className="w-25 h-25  ms-5  ">
                <h6>DATE : {payment.receivedDate}</h6>
                <div className="d-flex justify-content-end">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>

            <hr className="" />
          </div>
          <div className="main w-80 mx-5 my-4 v-stack gap-3  shadow-lg mb-5 rounded-3 border border-secondary pill-containers">
            <div className="mt-3 ms-5 my-4">
              <h4>Waste Types</h4>
            </div>
            <div className="main d-flex mx-5 overflow-hidden justify-content-between">
              {wasteTypes.map((waste, index) => {
                return (
                  <span
                    key={index}
                    className="badge rounded-pill  bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-25"
                  >
                    {waste}
                  </span>
                )
              })}
            </div>

            <div className="d-flex my-5 justify-content-between">
              <div className="v-stack">
                <h5 className="ms-5">Collected Bin Location</h5>
                <span className="badge rounded-pill  bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75 ">
                  {/* {binData.location} */}
                </span>
              </div>

              <div className="v-stack me-5">
                <h5 className="ms-5">Confirmed Date</h5>
                <span className="badge rounded-pill bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75  ">
                  {binData.updatedAt}
                </span>
              </div>
              <div className="v-stack">
                <h5 className="ms-5">Confirmed Time</h5>
                <span className="badge rounded-pill bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75  ">
                  {binData.updatedAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewOnePayment
