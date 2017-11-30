import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Label from '../components/Label'

class HomeScreen extends Component {

	static propTypes = {
		author: PropTypes.object
	}

	render() {
		const { author: { name } } = this.props
		return (
			<div>
				<h1>Home</h1>
				<Label value={name} size="3.5em"/>
				<Link to="/test">Discover my bio</Link>
			</div> 
		);
	}

}

const mapStateToProps = ({ author }) => ({ author })

export default connect(mapStateToProps)(HomeScreen);