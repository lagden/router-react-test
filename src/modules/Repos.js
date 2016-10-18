// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Nav to="/repos/reactjs/react-router">React Router</Nav></li>
          <li><Nav to="/repos/facebook/react">React</Nav></li>
          {this.props.children}
        </ul>
      </div>
    )
  }
})
