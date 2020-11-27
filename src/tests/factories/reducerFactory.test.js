import { reducerFactory } from '@factories'

describe('Factories:reducerFactory', () => {
  test('should create a reducer', () => {
    const initialState = {
      name: null,
      updateNamePending: false,
      updateNameSuccess: false,
      updateNameFailure: undefined
    }

    const reducer = reducerFactory(initialState, {})

    expect(reducer(initialState, {})).toEqual(initialState)
  })

  test('should handle action', () => {
    const initialState = {
      name: null,
      updateNamePending: false,
      updateNameSuccess: false,
      updateNameFailure: undefined
    }

    const expectedState = {
      ...initialState,
      name: 'Bob'
    }

    const action = {
      type: 'DUMMY_ACTION',
      response: {
        name: 'Bob'
      }
    }

    const reducer = reducerFactory(initialState, {
      [action.type]: (state, action) => ({ ...state, name: action.response.name })
    })

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
