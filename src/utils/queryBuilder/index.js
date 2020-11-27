export const arrayToString = (array = []) => {
  return array.toString()
}

export const queryBuilder = (separator, key, value) => {
  if (Array.isArray(value)) return `${separator}${key}=${arrayToString(value)}`
  return `${separator}${key}=${value}`
}

export const dataBuilder = (queryParam) => {
  if (queryParam) {
    return queryParam.split(',').map(val => val.trim())
  }
  return []
}
