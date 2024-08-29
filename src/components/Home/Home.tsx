import React from 'react'
import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Home() {
  return (
    <div className="home">
      <div className="icon-container">
        <i
          className="bi bi-mouse"
          style={{ fontSize: '42px', color: 'white' }}
        ></i>
        <p>scroll down</p>
      </div>
    </div>
  )
}

export default Home
