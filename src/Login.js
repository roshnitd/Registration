import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (

<div style={{textAlign: "center",backgroundColor:"yellow"}} Login>
        <br/>
        <h1>Login Page</h1>
        <input type="text" /><br/>
        <br/>
        <input type="text" /><br />
        <br />
        <Link to="/register"><button>LOGIN</button></Link>
    </div>
  )
}

export default Login