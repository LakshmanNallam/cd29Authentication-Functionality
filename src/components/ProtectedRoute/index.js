import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  if (Cookies.get('jwt_token') !== undefined) {
    console.log(props)
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
