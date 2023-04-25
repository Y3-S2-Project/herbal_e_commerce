import React from 'react'

export default function OrderAdminTable() {
  
  return (
    <div>
      <table class="tw-min-w-full tw-bg-white tw-border-radius">
        <thead class="tw-bg-gray-700">
          <tr>
            <th class="tw-px-6 py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Name
            </th>
            <th class="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Order Id
            </th>
            <th class="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Products
            </th>
            <th class="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Payment Status
            </th>
            <th class="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Total Price
            </th>
            <th class="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="tw-divide-y tw-divide-gray-200">
          <tr>
            <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  class="tw-w-10 tw-h-10 tw-rounded-full"
                />
                <div class="tw-text-sm tw-font-medium tw-text-gray-900">John Doe</div>
                <div class="tw-text-sm tw-text-gray-500">john.doe@gmail.com</div>
              </div>
            </td>
            <td class="tw-px-6 py-4 tw-whitespace-nowrap">
              <div class="tw-text-sm tw-text-gray-900">OID001</div>
            </td>
            <td class="tw-px-6 py-4 tw-whitespace-nowrap">
              <div class="tw-text-sm tw-text-gray-900">Product Name</div>
              <div class="tw-text-sm tw-text-gray-500">Quantity</div>
            </td>
            <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
              <span class="tw-px-2 tw-inline-flex tw-text-xs tw-leading-5 tw-font-semibold tw-rounded-full tw-bg-green-100 tw-text-green-800">
                Active
              </span>
            </td>
            <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-500">Rs.7500</td>
            <td class="tw-px-6 py-4 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-left">
              <a href="#" class="tw-text-indigo-600 tw-hover:text-indigo-900">
                Accept
              </a>
              <a href="#" class="tw-text-red-600 tw-hover:text-indigo-900 tw-ml-7">
                Cancel
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
