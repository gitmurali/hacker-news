import { requestWrapper } from '@api/requestWrapper'
import { API_HOST } from '@constants/general'
import createSandbox from 'jest-sandbox'

const stub = createSandbox()

const axiosStub = (() => {
  const methods = ['get', 'put', 'post', 'set', 'type', 'send', 'on', 'patch', 'catch', 'delete']
  const agent = methods.reduce((accumulator, current) => ({ ...accumulator, [current]: stub.fn() }), {})
  Object.keys(agent).forEach(key => agent[key].mockReturnValue(agent))
  return agent
})()

describe('Request Wrapper Methods', () => {
  afterEach(() => {
    stub.fn().mockRestore()
  })

  it('requestWrapper', () => {
    const request = requestWrapper(axiosStub)('TOKEN', 'dispatch')
    expect(Object.keys(request)).toEqual(expect.arrayContaining(['get', 'put', 'post', 'patch', 'delete']))
  })

  it('requestWrapper - get', () => {
    const path = 'path/'
    const params = {}
    const request = requestWrapper(axiosStub)('TOKEN', 'dispatch').get(path, params)
    expect(request.get).toHaveBeenCalledWith(`${API_HOST}/${path}`, { params })
  })

  it('requestWrapper - put', () => {
    const path = 'path/'
    const payload = {}
    const request = requestWrapper(axiosStub)('TOKEN', 'dispatch').put(path, payload)
    expect(request.put).toHaveBeenCalledWith(`${API_HOST}/${path}`, payload)
  })

  it('requestWrapper - post', () => {
    const path = 'path/'
    const payload = {}
    const request = requestWrapper(axiosStub)('TOKEN', 'dispatch').post(path, payload)
    expect(request.post).toHaveBeenCalledWith(`${API_HOST}/${path}`, payload)
  })

  it('requestWrapper - patch', () => {
    const path = 'path/'
    const payload = {}
    const request = requestWrapper(axiosStub)('TOKEN', 'dispatch').patch(path, payload)
    expect(request.patch).toHaveBeenCalledWith(`${API_HOST}/${path}`, payload)
  })
})
