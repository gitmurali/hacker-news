import { actionRequestFactory, actionResponseFactory } from '@factories'

describe('Factories:actionFactory', () => {
  test('should create an action request', () => {
    const DUMMY_ACTION = 'DUMMY_ACTION'
    const payload = { name: 'test' }
    const expected = {
      type: DUMMY_ACTION,
      payload
    }

    expect(actionRequestFactory(DUMMY_ACTION, payload)).toEqual(expected)
  })

  test('should create an action response', () => {
    const DUMMY_ACTION = 'DUMMY_ACTION'
    const response = { name: 'test' }
    const expected = {
      type: DUMMY_ACTION,
      response
    }

    expect(actionResponseFactory(DUMMY_ACTION, response)).toEqual(expected)
  })

  test('should create an action response - with error', () => {
    const DUMMY_ACTION = 'DUMMY_ACTION'
    const err = { error: 'Unexpected error occurred' }
    const expected = {
      type: DUMMY_ACTION,
      response: {
        ...err
      }
    }

    expect(actionResponseFactory(DUMMY_ACTION, null, err)).toEqual(expected)
  })
})
