import { useLocation } from 'react-router-dom'

export default () => {
  const search = useLocation().search
  return new URLSearchParams(search)
}
