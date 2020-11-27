import * as actions from '@actions/hackerNews'
import { listHackerNews } from '@api/hackerNews'
import { LIST_HACKER_NEWS_REQUEST } from '@constants/action-types/hackerNews'
import { put, call, takeEvery, all } from 'redux-saga/effects'

export const handleGetListGameChangerFiles = function * (payload) {
  try {
    const response = yield call(listHackerNews, payload)
    if (response.isAxiosError) return yield put(actions.getHackerNewsRequestFailure(response.message))
    yield put(actions.getHackerNewsRequestSuccess(response))
  } catch (e) {
    yield put(actions.getHackerNewsRequestFailure(e))
  }
}

export default all([
  takeEvery(LIST_HACKER_NEWS_REQUEST, handleGetListGameChangerFiles)
])
