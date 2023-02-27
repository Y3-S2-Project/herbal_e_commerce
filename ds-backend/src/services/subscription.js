import User from "../models/user"
import { getOneCustomer , subscribe} from "../repository/customer"

export const subscribeCompany = async (_id, companyId ) => {
   return subscribe(_id , companyId)
}