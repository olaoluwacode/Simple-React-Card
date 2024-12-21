
import reactLogo from '/React/reactvitetwo/src/assets/react.svg'
import React from 'react'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar"> 
       <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <span className="header-text">React Facts</span>
      </nav>
    </header>
  )
}
