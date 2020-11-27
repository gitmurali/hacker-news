const toCamel = s => s.replace(/_\w/g, m => m[1].toUpperCase())

const isObject = o => o === Object(o) && !Array.isArray(o)

export const keysToCamel = function (o) {
  if (isObject(o)) {
    const n = {}

    Object.keys(o).forEach(k => {
      n[toCamel(k)] = keysToCamel(o[k])
    })
    return n
  } else if (Array.isArray(o)) {
    return o.map(i => {
      return keysToCamel(i)
    })
  }

  return o
}

export const keysToSnake = function (o) {
  if (isObject(o)) {
    const n = {}

    Object.keys(o).forEach(k => {
      n[camelToSnake(k)] = keysToSnake(o[k])
    })
    return n
  } else if (Array.isArray(o)) {
    return o.map(i => {
      return keysToSnake(i)
    })
  }

  return o
}

export const camelToSnake = (str) => {
  return str.replace(/\.?([A-Z0-9])/g, function (x, y) {
    return '_' + y.toLowerCase()
  }).replace(/^_/, '')
}

export const snakeToCamel = (str) => {
  str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', ''))
}
