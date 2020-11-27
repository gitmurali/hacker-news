import requestWrapper from '@api'
import { keysToCamel } from '@helpers/camelCaseConverter'

export const callApi = request => {
  return request(requestWrapper())
}

export const handleResponse = response => {
  response = keysToCamel(response)
  return response.data
}

export const handleError = error => error.response.data

export default callApi
