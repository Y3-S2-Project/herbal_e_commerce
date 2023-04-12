import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ItemAddModal } from '../../../components'

const TableItem = () => {
  return (
    <tr className="tw-bg-white tw-border-b tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-hover:bg-gray-50 tw-dark:hover:bg-gray-600">
      <th
        scope="row"
        className="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap tw-dark:text-white"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="tw-px-6 tw-py-4">Silver</td>
      <td className="tw-px-6 tw-py-4">Laptop</td>
      <td className="tw-px-6 tw-py-4">$2999</td>
      <td className="tw-px-6 tw-py-4 tw-flex tw-justify-center tw-items-center">
        <button className="tw-px-2 tw-py-1 tw-rounded tw-mx-1 tw-bg-blue-500 tw-text-white">
          View More
        </button>
        <button className="tw-px-2 tw-py-1 tw-rounded tw-mx-1 tw-bg-yellow-500 tw-text-white">
          Update
        </button>
        <button className="tw-px-2 tw-py-1 tw-rounded tw-mx-1 tw-bg-red-500 tw-text-white">
          Remove
        </button>
      </td>
    </tr>
  )
}
const TableFooterNav = () => {
  return (
    <nav
      className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-bg-white"
      aria-label="Table navigation"
    >
      <span className="tw-text-sm tw-font-normal tw-text-gray-500 tw-dark:text-gray-400">
        Showing <span className="tw-font-semibold tw-text-gray-900 tw-dark:text-white">1-10</span> of{' '}
        <span className="tw-font-semibold tw-text-gray-900 ">1000</span>
      </span>
      <ul className="tw-inline-flex tw-items-center tw--space-x-px">
        <li>
          <a
            href="#"
            className="tw-block tw-px-3 tw-py-2 tw-ml-0 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-rounded-l-lg tw-hover:bg-gray-100 tw-hover:text-gray-700 "
          >
            <span className="tw-sr-only">Previous</span>
            <svg
              className="tw-w-5 tw-h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="tw-px-3 tw-py-2 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-hover:bg-gray-100 tw-hover:text-gray-700 tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-dark:text-gray-400 tw-dark:hover:bg-gray-700 tw-dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="tw-px-3 tw-py-2 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-hover:bg-gray-100 tw-hover:text-gray-700 tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-dark:text-gray-400 tw-dark:hover:bg-gray-700 tw-dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="tw-z-10 tw-px-3 tw-py-2 tw-leading-tight tw-text-blue-600 tw-border tw-border-blue-300 tw-bg-blue-50 tw-hover:bg-blue-100 tw-hover:text-blue-700 tw-dark:border-gray-700 tw-dark:bg-gray-700 tw-dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="tw-px-3 tw-py-2 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-hover:bg-gray-100 tw-hover:text-gray-700 "
          >
            ...
          </a>
        </li>
        <li>
          <a
            href="#"
            className="tw-px-3 tw-py-2 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-hover:bg-gray-100 tw-hover:text-gray-700 tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-dark:text-gray-400 tw-dark:hover:bg-gray-700 tw-dark:hover:text-white"
          >
            100
          </a>
        </li>
        <li>
          <a
            href="#"
            className="tw-block tw-px-3 tw-py-2 tw-leading-tight tw-text-gray-500 tw-bg-white tw-border tw-border-gray-300 tw-rounded-r-lg tw-hover:bg-gray-100 tw-hover:text-gray-700 tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-dark:text-gray-400 tw-dark:hover:bg-gray-700 tw-dark:hover:text-white"
          >
            <span className="tw-sr-only">Next</span>
            <svg
              className="tw-w-5 tw-h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

const AllItems = () => {
  const [validated, setValidated] = useState(false)
  const [form, setForm] = useState({})
  const [mycompany, setMycompany] = useState([])
  const [multiselectstyle, setMultiselectstyle] = useState({
    chips: {
      background: '#17d193',
    },
    highlightOption: {
      background: '#17d193',
    },
  })
  const [itemAddModal, setItemAddModal] = useState(false)
  const itemAddModalClose = () => setItemAddModal(false)
  const itemAddModalShow = () => setItemAddModal(true)

  return (
    <Container>
      <main className="tw-mt-4">
        <div className="tw-relative tw-overflow-x-auto tw-shadow-md tw-sm:rounded-lg tw-bg-white  ">
          <div className="tw-flex tw-items-center tw-justify-between tw-pb-4">
            <label htmlFor="table-search" className="tw-sr-only">
              Search
            </label>
            <div className="tw-relative tw-ml-3 tw-mt-3">
              <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-pointer-events-none">
                <svg
                  className="tw-w-5 tw-h-5 tw-text-gray-500 tw-dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="tw-block tw-p-2 tw-pl-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-w-80 tw-bg-gray-50 tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
            <div className="tw-bg-gray-50 tw-mr-10 tw-mt-3">
              <button
                onClick={itemAddModalShow}
                className="tw-w-32 tw-py-2   tw-tracking-widest tw-text-white tw-uppercase tw-bg-[#383634] tw-shadow-lg tw-focus:outline-none tw-hover:bg-white-900 tw-hover:shadow-none"
              >
                + Add Item
              </button>
            </div>
          </div>
          <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 tw-dark:text-gray-400">
            <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 tw-dark:bg-gray-700 tw-dark:text-gray-400">
              <tr>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Product name
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Color
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Category
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Price
                </th>
                <th scope="col" className="tw-px-6 tw-py-3 tw-text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
            </tbody>
          </table>
          <TableFooterNav />
        </div>
        <ItemAddModal
          show={itemAddModal}
          itemAddModalShow={itemAddModalShow}
          itemAddModalClose={itemAddModalClose}
          setForm={setForm}
          form={form}
        />
      </main>
    </Container>
  )
}

export default AllItems
