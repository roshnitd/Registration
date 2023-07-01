import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{textAlign: "center",backgroundColor:"red"}} Home>
        <br/>
        <h1>HOME</h1>
        <Link to="/Log"><button>LOGOUT</button></Link>
    </div>
  )
}

export default Home