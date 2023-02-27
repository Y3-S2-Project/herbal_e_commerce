import axios from 'axios'

const PAYMENT_BASE_URL = 'http://localhost:3001/api/makePayment'
const PAYMENT_METHOD_BASED_URL = 'http://localhost:3001/api/paymentmethod/'
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
};

class PaymentService {
  makePayment(query) {
    return axios.post(PAYMENT_BASE_URL, query, config)
  }
  getAllPaymentMethod() {
    return axios.get(PAYMENT_METHOD_BASED_URL, config)
  }
  updatePaymentMethod(id, form) {
    axios.patch(`http://localhost:3001/api/paymentmethod/${id}`, form, config)
  }
  addPaymentMethod(query) {
    axios.post(`http://localhost:3001/api/paymentmethod`, query, config)
  }
  getOnePaymentMethod(id) {
    axios.get(`http://localhost:3001/api/paymentmethod/${id}`, config)
  }
  deletePaymentMethod(id) {
    axios.delete(`http://localhost:3001/api/paymentmethod/${id}`, config)
  }
}

export default new PaymentService()
