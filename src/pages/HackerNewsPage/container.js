import { getHackerNewsRequest } from '@actions/hackerNews'
import HackerNewsPage from '@pages/HackerNewsPage/HackerNewsPage'
import { connect } from 'react-redux'

const mapStateToProps = ({ hackerNews }) => ({
  hackerNews
})

const mergeProps = (state, { dispatch }, props) => ({
  ...state,
  ...props,
  onload: () => {
    dispatch(getHackerNewsRequest())
  }
})

export default connect(mapStateToProps, null, mergeProps)(HackerNewsPage)
