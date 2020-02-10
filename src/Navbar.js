import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <nav className="navbar">
        <h2 className="navbar-title">Recipe App</h2>
        <ul>
          <li className="navbar-item" onClick={this.props.onNewRecipe}><a href="#">New Recipe</a></li>
          <li className="navbar-item"><a href="#">Home</a></li>
          <li className="navbar-item"><a href="#">About</a></li>
          <li className="navbar-item"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;