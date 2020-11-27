const formatStringWithUrl = (copy, formatter = undefined) => {
  // eslint-disable-next-line no-useless-escape
  const urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
  const copyContainsUrl = urlRegex.test(copy)

  if (copyContainsUrl) {
    return copy.replace(urlRegex, formatter || (str => str))
  }

  return copy
}

export default formatStringWithUrl
