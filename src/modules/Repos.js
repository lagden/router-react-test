import React from 'react'
import Nav from './nav'

export default React.createClass({
	propTypes: {
		children: React.PropTypes.any
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	handleSubmit(event) {
		event.preventDefault()
		const userName = event.target.elements[0].value
		const repo = event.target.elements[1].value
		const path = `/repos/${userName}/${repo}`
		this.context.router.push(path)
	},
	render() {
		return (
			<div>
				<h2>Repos</h2>
				<ul>
					<li><Nav to="/repos/lagden/react-router">React Router</Nav></li>
					<li><Nav to="/repos/lagden/react">React</Nav></li>
					<li>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="userName"/> / {' '}
							<input type="text" placeholder="repo"/>{' '}
							<button type="submit">Go</button>
						</form>
					</li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})
