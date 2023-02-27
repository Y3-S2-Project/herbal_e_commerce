import axios from 'axios'

const QUERY_BASE_URL = 'http://localhost:3001/api/contactus'

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
};

class ContactUsService {
  setQueryDetails(query) {
    return axios.post(QUERY_BASE_URL, query, config)
  }
}

export default new ContactUsService()
