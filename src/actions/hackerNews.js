import types from '@constants/action-types'
import { actionResponseFactory, actionRequestFactory } from '@factories/actionFactory'

export const getHackerNewsRequest = payload => actionRequestFactory(types.LIST_HACKER_NEWS_REQUEST, payload)

export const getHackerNewsRequestSuccess = response => actionResponseFactory(types.LIST_HACKER_NEWS_SUCCESS, response)

export const getHackerNewsRequestFailure = error => actionResponseFactory(types.LIST_HACKER_NEWS_FAILURE, { error })
