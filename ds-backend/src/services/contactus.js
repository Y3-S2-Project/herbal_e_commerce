import { insertContactUsEntry } from '../repository/contactus'



export const createContactUsEntry = async (data) => {
//   const PaymentMethod = await findPaymentMethod({ cardNumber: data.cardNumber })
//   if (PaymentMethod) return { status: 400, message: 'This payment method  already added' }
  return await insertContactUsEntry({ ...data})
}