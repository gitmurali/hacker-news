import { API_URL } from '@constants/general'
import { history } from '@routes/history'
import axios from 'axios'

export const requestWrapper = agent => authToken => {
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `JWT ${authToken}`
  }

  axios.defaults.headers.common['Content-Type'] = 'application/json'

  return {
    get: (path, payload) => agent.get(`${API_URL}/${path}`, { params: payload }).catch(verifyToken),
    post: (path, payload) => agent.post(`${API_URL}/${path}`, payload).catch(verifyToken),
    put: (path, payload) => agent.put(`${API_URL}/${path}`, payload).catch(verifyToken),
    patch: (path, payload) => agent.patch(`${API_URL}/${path}`, payload).catch(verifyToken),
    delete: (path, payload) => agent.delete(`${API_URL}/${path}`, { data: { ...payload } }).catch(verifyToken)
  }
}

const verifyToken = ({ response }) => {
  const { status } = response
  if (status === 401 || status === 403) {
    axios.get(`${API_URL}/auth/tokenVerify/`).catch(() => {
      history.push('/login')
    })
  }

  return response
}

export default requestWrapper(axios)
