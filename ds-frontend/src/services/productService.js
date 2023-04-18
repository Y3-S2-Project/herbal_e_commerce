import axios from 'axios'
import { axiosInstance } from './core/axios'
export const getAllProduct = async () => {
  try {
    let res = await axiosInstance.get(`/product/all-product`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (product) => {
  try {
    const { pName, pDescription, pImages, pStatus, pCategory, pQuantity, pPrice, pOffer, pWeight } =
      product

    const parsedQuantity = parseInt(pQuantity)
    const parsedPrice = parseFloat(pPrice)
    const parsedOffer = parseFloat(pOffer)
    const parsedWeight = parseFloat(pWeight)

    const requestBody = {
      pName,
      pDescription,
      pStatus,
      pCategory,
      pImages,
      pQuantity: parsedQuantity,
      pPrice: parsedPrice,
      pOffer: parsedOffer,
      pWeight: parsedWeight,
    }


    const response = await axiosInstance.post('/product/add-product', requestBody)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const editProduct = async (product) => {
  console.log(product)
  /* Most important part for updating multiple image  */
  let formData = new FormData()

  /* Most important part for updating multiple image  */
  formData.append('pId', product.pId)
  formData.append('pName', product.pName)
  formData.append('pDescription', product.pDescription)
  formData.append('pStatus', product.pStatus)
  formData.append('pCategory', product.pCategory._id)
  formData.append('pQuantity', product.pQuantity)
  formData.append('pPrice', product.pPrice)
  formData.append('pOffer', product.pOffer)
  formData.append('pImages', product.pImages)

  try {
    let res = await axiosInstance.post(`/product/edit-product`, formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteProduct = async (pId) => {
  try {
    let res = await axiosInstance.delete(`/product/delete-product/${pId}`)
    return res.data
  } catch (error) { 
    console.log(error)
  }
}

export const productByCategory = async (catId) => {
  try {
    let res = await axiosInstance.post(`/product/product-by-category`, {
      catId,
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const productByPrice = async (price) => {
  try {
    let res = await axiosInstance.post(`/product/product-by-price`, {
      price,
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
