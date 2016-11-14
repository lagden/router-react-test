import React from 'react'

export default React.createClass({
	propTypes: {
		params: React.PropTypes.object
	},
	render() {
		return (
			<div>
				<h3>{this.props.params.repoName}</h3>
				<h4>{this.props.params.userName}</h4>
			</div>
		)
	}
})
