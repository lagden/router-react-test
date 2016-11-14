import React from 'react'

import Nav from './nav'
import Home from './home'

export default React.createClass({
	propTypes: {
		children: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<div>
				<h1>The App</h1>
				<ul role="nav">
					<li><Nav to="/" onlyActiveOnIndex>Home</Nav></li>
					<li><Nav to="/about">About</Nav></li>
					<li><Nav to="/repos">Repos</Nav></li>
				</ul>
				{this.props.children || <Home/>}
			</div>
		)
	}
})
