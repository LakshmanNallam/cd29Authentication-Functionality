import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Home from '../Home'
import './index.css'

const Login = props => {
  const SubmitButtonClicked = async event => {
    event.preventDefault()
    const username = 'rahul'
    const password = 'rahul@2021'
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify({username, password})}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', `${data.jwt_token}`, {expires: 1})
      console.log('okkk')
      const {history} = props
      history.replace('/')
    }
    return null
  }

  if (Cookies.get('jwt_token') === undefined) {
    return (
      <form className="mainDiv" onSubmit={SubmitButtonClicked}>
        <h1>Please Login</h1>
        <button type="submit">Login with sample Creds</button>
      </form>
    )
  }
  return <Redirect to="/" />
}

export default Login
