import { callApi, handleResponse, handleError } from '@helpers/api'

const listHackerNewsRequest = agent => ({ payload: { page } }) => agent.get(`v1/search?tags=front_page&page=${page}`)

export const listHackerNews = async payload =>
  callApi(listHackerNewsRequest)(payload)
    .then(handleResponse)
    .catch(handleError)
