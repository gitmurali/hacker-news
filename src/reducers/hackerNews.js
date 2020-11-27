import types from '@constants/action-types'
import { reducerFactory } from '@factories'

export const initialState = {
  title: '',
  isLoading: false
}

export default reducerFactory(initialState, {
  [types.LIST_HACKER_NEWS_REQUEST]: state => ({ ...state, isLoading: true, error: null }),
  [types.LIST_HACKER_NEWS_SUCCESS]: (state, { response }) => ({
    ...state,
    isLoading: false,
    ...response
  }),
  [types.LIST_HACKER_NEWS_FAILURE]: (state, { response }) => ({
    ...state,
    isLoading: false,
    ...response
  })
})
