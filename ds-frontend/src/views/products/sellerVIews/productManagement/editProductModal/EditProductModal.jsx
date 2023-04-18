import React, { Fragment, useContext, useState, useEffect } from 'react'
import { ProductContext } from '../Products'

import { editProduct, getAllProduct } from '../../../../../services/productService'
import { getAllCategory } from '../../../../../services/categoryService'
const apiURL = process.env.REACT_APP_API_URL

const EditProductModal = (props) => {
  const { data, dispatch } = useContext(ProductContext)

  const [categories, setCategories] = useState(null)

  const alert = (msg, type) => <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>

  const [editformData, setEditformdata] = useState({
    pId: '',
    pName: '',
    pDescription: '',
    pImages: null,
    pEditImages: null,
    pStatus: '',
    pCategory: '',
    pQuantity: '',
    pPrice: '',
    pOffer: '',
    error: false,
    success: false,
  })

  useEffect(() => {
    fetchCategoryData()
  }, [])

  const fetchCategoryData = async () => {
    let responseData = await getAllCategory()
    if (responseData.Categories) {
      setCategories(responseData.Categories)
    }
  }

  useEffect(() => {
    setEditformdata({
      pId: data.editProductModal.pId,
      pName: data.editProductModal.pName,
      pDescription: data.editProductModal.pDescription,
      pImages: data.editProductModal.pImages,
      pStatus: data.editProductModal.pStatus,
      pCategory: data.editProductModal.pCategory,
      pQuantity: data.editProductModal.pQuantity,
      pPrice: data.editProductModal.pPrice,
      pOffer: data.editProductModal.pOffer,
    })
  }, [data.editProductModal])

  const fetchData = async () => {
    let responseData = await getAllProduct()
    if (responseData && responseData.Products) {
      dispatch({
        type: 'fetchProductsAndChangeState',
        payload: responseData.Products,
      })
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    if (!editformData.pEditImages) {
      console.log('Image Not upload=============', editformData)
    } else {
      console.log('Image uploading')
    }
    try {
      let responseData = await editProduct(editformData)
      if (responseData.success) {
        fetchData()
        setEditformdata({ ...editformData, success: responseData.success })
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            success: responseData.success,
          })
        }, 2000)
      } else if (responseData.error) {
        setEditformdata({ ...editformData, error: responseData.error })
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            error: responseData.error,
          })
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: 'editProductModalClose', payload: false })}
        className={`${
          data.editProductModal.modal ? '' : 'tw-hidden'
        } tw-fixed tw-top-0 tw-left-0 tw-z-30 tw-w-full tw-h-full tw-bg-black tw-opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editProductModal.modal ? '' : 'tw-hidden'
        } tw-fixed tw-inset-0 tw-flex tw-items-center tw-z-30 tw-justify-center tw-overflow-auto`}
      >
        <div className="tw-mt-32 tw-md:mt-0 tw-relative tw-bg-white tw-w-11/12 tw-md:w-3/6 tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-space-y-4 tw-px-4 tw-py-4 tw-md:px-8">
          <div className="tw-flex tw-items-center tw-justify-between tw-w-full tw-pt-4">
            <span className="tw-text-left tw-font-semibold tw-text-2xl tw-tracking-wider">Edit Product</span>
            {/* Close Modal */}
            <span
              style={{ background: '#303031' }}
              onClick={(e) => dispatch({ type: 'editProductModalClose', payload: false })}
              className="tw-cursor-pointer tw-text-gray-100 tw-py-2 tw-px-2 tw-rounded-full"
            >
              <svg
                className="tw-w-6 tw-h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {editformData.error ? alert(editformData.error, 'red') : ''}
          {editformData.success ? alert(editformData.success, 'green') : ''}
          <form className="tw-w-full" onSubmit={(e) => submitForm(e)}>
            <div className="tw-flex tw-space-x-1 tw-py-4">
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1 tw-space-x-1">
                <label htmlFor="name">Product Name *</label>
                <input
                  value={editformData.pName}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pName: e.target.value,
                    })
                  }
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  type="text"
                />
              </div>
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1 tw-space-x-1">
                <label htmlFor="price">Product Price *</label>
                <input
                  value={editformData.pPrice}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pPrice: e.target.value,
                    })
                  }
                  type="number"
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  id="price"
                />
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-space-y-2">
              <label htmlFor="description">Product Description *</label>
              <textarea
                value={editformData.pDescription}
                onChange={(e) =>
                  setEditformdata({
                    ...editformData,
                    error: false,
                    success: false,
                    pDescription: e.target.value,
                  })
                }
                className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                name="description"
                id="description"
                cols={5}
                rows={2}
              />
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="tw-flex tw-flex-col tw-mt-4">
              <label htmlFor="image">Product Images *</label>
              {editformData.pImages ? (
                <div className="tw-flex tw-space-x-1">
                  <img
                    className="tw-h-16 tw-w-16 tw-object-cover"
                    src={`${apiURL}/uploads/products/${editformData.pImages[0]}`}
                    alt="productImage"
                  />
                  <img
                    className="tw-h-16 tw-w-16 tw-object-cover"
                    src={`${apiURL}/uploads/products/${editformData.pImages[1]}`}
                    alt="productImage"
                  />
                </div>
              ) : (
                ''
              )}
              <span className="tw-text-gray-600 tw-text-xs">Must need 2 images</span>
              <input
                onChange={(e) =>
                  setEditformdata({
                    ...editformData,
                    error: false,
                    success: false,
                    pEditImages: [...e.target.files],
                  })
                }
                type="file"
                accept=".jpg, .jpeg, .png"
                className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                id="image"
                multiple
              />
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="tw-flex tw-space-x-1 tw-py-4">
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1">
                <label htmlFor="status">Product Status *</label>
                <select
                  value={editformData.pStatus}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pStatus: e.target.value,
                    })
                  }
                  name="status"
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  id="status"
                >
                  <option name="status" value="Active">
                    Active
                  </option>
                  <option name="status" value="Disabled">
                    Disabled
                  </option>
                </select>
              </div>
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1">
                <label htmlFor="status">Product Category *</label>
                <select
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pCategory: e.target.value,
                    })
                  }
                  name="status"
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories && categories.length > 0
                    ? categories.map((elem) => {
                        return (
                          <Fragment key={elem._id}>
                            {editformData.pCategory._id &&
                            editformData.pCategory._id === elem._id ? (
                              <option name="status" value={elem._id} key={elem._id} selected>
                                {elem.cName}
                              </option>
                            ) : (
                              <option name="status" value={elem._id} key={elem._id}>
                                {elem.cName}
                              </option>
                            )}
                          </Fragment>
                        )
                      })
                    : ''}
                </select>
              </div>
            </div>
            <div className="tw-flex tw-space-x-1 tw-py-4">
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1">
                <label htmlFor="quantity">Product in Stock *</label>
                <input
                  value={editformData.pQuantity}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pQuantity: e.target.value,
                    })
                  }
                  type="number"
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  id="quantity"
                />
              </div>
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-space-y-1">
                <label htmlFor="offer">Product Offfer (%) *</label>
                <input
                  value={editformData.pOffer}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pOffer: e.target.value,
                    })
                  }
                  type="number"
                  className="tw-px-4 tw-py-2 tw-border tw-focus:outline-none"
                  id="offer"
                />
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-space-y-1 tw-w-full tw-pb-4 tw-md:pb-6 tw-mt-4">
              <button
                style={{ background: '#303031' }}
                type="submit"
                className="tw-rounded-full tw-bg-gray-800 tw-text-gray-100 tw-text-lg tw-font-medium tw-py-2"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProductModal
