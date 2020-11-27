import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = ({ user }) => ({
  user
})

const mergeProps = (state, { dispatch }, props) => ({
  ...state,
  ...props,
  dispatch
})

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Layout)
