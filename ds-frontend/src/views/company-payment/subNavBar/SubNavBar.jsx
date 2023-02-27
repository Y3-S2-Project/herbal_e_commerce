import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './subNavBar.scoped.css'
import ViewCompanyPayments from '../view-company-payments/ViewCompanyPayments'
import PaymentMethods from '../paymentMethods/PaymentMethods'
import MakePayment from '../make-payment/MakePayment'

export default function SubNavBar() {
  const [targetUi, setTargetUi] = useState('view-payments')
  const changeUi = (id) => {
    console.log(id)

    setTargetUi(id)
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <nav className="sidebar nav">
          <ul className="list-unstyled components font-color d-flex justify-content-between">
            <li>
              <NavLink
                id="view-payments"
                to="#"
                className="active"
                onClick={(e) => changeUi(e.target.id)}
              >
                View Payments
              </NavLink>
              <hr className={targetUi === 'view-payments' ? 'selected' : ''} />
            </li>
            <li>
              <NavLink id="payment-methods" to="#" onClick={(e) => changeUi(e.target.id)}>
                Payment Methods
              </NavLink>
              <hr className={targetUi === 'payment-methods' ? 'selected' : ''} />
            </li>
            <li>
              <NavLink id="make-payments" to="#" onClick={(e) => changeUi(e.target.id)}>
                Make Payments
              </NavLink>
              <hr className={targetUi === 'make-payments' ? 'selected' : ''}  />
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        {targetUi === 'view-payments' ? (
          <ViewCompanyPayments />
        ) : targetUi === 'payment-methods' ? (
          <PaymentMethods />
        ) : targetUi === 'make-payments' ? (
          <MakePayment />
        ) : (
          <ViewCompanyPayments />
        )}
      </div>
    </>
  )
}
