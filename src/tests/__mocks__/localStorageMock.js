/*
    Mock localStorage, by default set is_management_group to true, so the component renders version for mngmt and saves snapshot of it. Local storage is accessible variable because later on it needs to be altered for another tests, like snapshot testing.
  */

export const initialState = {
  user: {
    is_management_group: true,
    role: 'admin'
  }
}

class LocalStorageMock {
  constructor () {
    this.store = initialState
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return JSON.stringify(this.store[key]) || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()
