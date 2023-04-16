import React from 'react'
import CartItem from '../../components/cartItem/CartItem'
import { TopNav } from '../../components'

export default function ShoppingCart() {
  return (
    <>
      <TopNav />
      <h1 className="tw-font-bold tw-text-lg tw-m-4">Shopping Cart</h1>
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
      <hr className="tw-border-t tw-border-gray-800 tw-dark:border-gray-300 tw-h-px tw-w-full tw-my-3" />
      <div className="tw-justify-end tw-max-w-3xl tw-mx-auto tw-p-1 tw-flex-col tw-items-end ">
        {/* Display total price */}
        <p>Total Price: $25000</p>
        <br />
        <a
          href="#"
          className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-mt-1 tw-self-end tw-ml-auto tw-text-right"
        >
          Checkout
        </a>
      </div>
    </>
  )
}
