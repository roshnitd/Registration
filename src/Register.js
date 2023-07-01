import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (

    <div style={{textAlign: "center",backgroundColor:"blue"}} Register>
        <br/>
        <h1>Registration Page</h1>
        <input type="text" /><br/>
        <br/>
        <input type="text" /><br/>
        <br/>
        <Link to="/Log"><button>SUBMIT</button></Link>
    </div>
  )
}

export default Register