export const actionRequestFactory = (actionType, payload = null) => ({
  type: actionType,
  payload
})

export const actionResponseFactory = (actionType, resp, err = undefined) => ({
  type: actionType,
  response: err ? { ...err } : { ...resp }
})

export default undefined
