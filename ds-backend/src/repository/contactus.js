import ContactUs from '../models/contactus.models'



export const insertContactUsEntry = async (data) => {
  return await new ContactUs(data).save()
}

