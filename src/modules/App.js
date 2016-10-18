import React from 'react'

import Nav from './Nav'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Nav to="/" onlyActiveOnIndex={true}>Home</Nav></li>
          <li><Nav to="/about">About</Nav></li>
          <li><Nav to="/repos">Repos</Nav></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
