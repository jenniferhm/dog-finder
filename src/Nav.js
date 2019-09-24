import React from 'react';
import { Link } from 'react-router-dom'


class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dogs/Whiskey">Whiskey</Link>
        <Link to="/dogs/Duke">Duke</Link>
        <Link to="/dogs/Perry">Perry</Link>
        <Link to="/dogs/Tubby">Tubby</Link>
      </div>
    )
  }
}

export default Nav;