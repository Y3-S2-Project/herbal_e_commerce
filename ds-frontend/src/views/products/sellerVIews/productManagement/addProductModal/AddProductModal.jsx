import React, { Fragment, useContext, useState, useEffect } from 'react'
import { ProductContext } from '../Products'

import { createProduct, getAllProduct } from '../../../../../services/productService'
import { getAllCategory } from '../../../../../services/categoryService'
import AddProductDetail from './AddProductDetails'

const AddProductModal = (props) => {
  useEffect(() => {
    fetchCategoryData()
  }, [])

  const [allCat, setAllCat] = useState({})

  const fetchCategoryData = async () => {
    let responseData = await getAllCategory()
    if (responseData.Categories) {
      setAllCat(responseData.Categories)
    }
  }

  return (
    <Fragment>
      <AddProductDetail categories={allCat} />
    </Fragment>
  )
}

export default AddProductModal
