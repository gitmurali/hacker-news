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
    dispatch(getHackerNewsRequest({ page: 0 }))
  },
  handleMore: page => {
    dispatch(getHackerNewsRequest({ page }))
  }
})

export default connect(mapStateToProps, null, mergeProps)(HackerNewsPage)
