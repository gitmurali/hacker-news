import requestWrapper from '@api'
import { keysToCamel } from '@helpers/camelCaseConverter'
import { getToken } from '@helpers/user'

export const callApi = request => {
  const authToken = getToken()
  return request(requestWrapper(authToken))
}

export const handleResponse = response => {
  response = keysToCamel(response)
  return response.data
}

export const handleError = error => error.response.data

export default callApi
