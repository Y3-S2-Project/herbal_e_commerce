import React from 'react'
import DrugsImage from '../../assets/images/landing-page/drugs-image.png'

export default function CartItem() {
  const [cartItems, setCartItems] = React.useState([]) // cartItems is an array of objects

  const handleChange = (item, d) => {
    if (d === 'inc') {
      item.quantity = item.quantity + 1
    } else if (d === 'dec') {
      item.quantity = item.quantity - 1
    }
    setCartItems([...cartItems])
  }

  return (
    <>
      <div className="cards tw-max-w-3xl tw-mx-auto tw-p-3 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow tw-hover:bg-gray-100 tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-dark:hover:bg-gray-700 tw-flex tw-spacebetween tw-mt-3">
        <div className="image_box tw-p-6 ">
          <img src={DrugsImage} alt="" />
        </div>
        {/* div which contains 3 p tags and a tags flex */}
        <div class="details tw-flex tw-justify-evenly tw-p-5 tw-m-4 ">
          <div class="middle tw-items-center tw-mr-2 tw-ml-2">
            <p className="tw-font-bold">Blackberry bluestem</p>
            <p class="tw-text-gray-400">500g</p>
            <div class="tw-w-8 tw-h-8 tw-bg-white tw-flex tw-justify-center tw-items-center tw-border tw-border-black tw-mt-2">
              <div class="tw-w-6 tw-h-6 tw-bg-green-500 tw-rounded-full"></div>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-justify-evenly tw-p-5 tw-m-4">
            <button class="tw-m-2 tw-bg-gray-200 tw-rounded-full tw-w-8 tw-h-8 flex items-center justify-center">
              -
            </button>
            <span class="tw-m-2">1</span>
            <button class="tw-m-2 tw-bg-gray-200 tw-rounded-full tw-w-8 tw-h-8 flex items-center justify-center">
              +
            </button>
          </div>
          <div class="tw-flex tw-flex-col tw-justify-center tw-items-end">
            <p>$2.99</p>
            <div class="tw-text-right">
              <a href="#" class="tw-text-red-500 tw-font-bold">
                Remove
              </a>
              <br />
              <a href="#" class="tw-text-gray-500 tw-font-bold">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
