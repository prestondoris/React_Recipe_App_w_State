import React, {Component} from 'react'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="navbar-title">Recipe App</h2>
        <ul>
          <li className="navbar-item"><a href="localhost:3000">New Recipe</a></li>
          <li className="navbar-item"><a href="localhost:3000">Home</a></li>
          <li className="navbar-item"><a href="localhost:3000">About</a></li>
          <li className="navbar-item"><a href="localhost:3000">Contact Us</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;