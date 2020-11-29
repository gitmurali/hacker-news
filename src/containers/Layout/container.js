import { connect } from 'react-redux'

import Layout from './Layout'

const mergeProps = (state, { dispatch }, props) => ({
  ...state,
  ...props,
  dispatch
})

export default connect(
  null,
  null,
  mergeProps
)(Layout)
