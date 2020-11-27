import React from 'react'

import Paragraph from '@components/Paragraph'

export const formatDescription = desc => <Paragraph><span dangerouslySetInnerHTML={{ __html: `${desc}` }} /></Paragraph>

export const buildTransactionSearchString = (transactionType, searchTerm) => {
  if (transactionType) {
    return searchTerm ? `?search=${searchTerm}&client_transaction_type=${transactionType}` : `?client_transaction_type=${transactionType}`
  }

  return `?search=${searchTerm}`
}

export const getButtonId = (pageName, componentName, action) => `${pageName}-${componentName}_${action}`

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
