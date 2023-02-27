import { logger } from "handlebars";
import Payment from "../models/payment.model";
import PickupRequest from "../models/pickuprequest.model";
import { findPaymentMethod } from "../repository/payment_method";

export const insertPayment = async (data, paymentMethods, pickupRequest) => {
  const { amount, date, note, paymentId } = data;
  const paymentObject = {
    paymentId: paymentId,
    paidDate: date,
    receivedDate: date,
    companyPaid: amount.toFixed(2),
    customerEarned: (amount * 0.8).toFixed(2),
    profit: (amount * 0.2).toFixed(2),
    note: note,
    paymentMethod: paymentMethods._id,
  };
  const payment = new Payment({ ...paymentObject });
  paymentMethods.totalPayment = paymentMethods.totalPayment + amount;

  try {
    const Payment = await payment.save();
    pickupRequest.payment = Payment._id;
    await pickupRequest.save();
    await paymentMethods.save();
    return Payment;
  } catch (e) {
    console.log(e.message);
  }
  return {};
};
