import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Label from '../components/Label'

class TestScreen extends Component {

  static propTypes = {
    author: PropTypes.object
  }

  render() {
    const { author: { bio } } = this.props
    return (
      <div>
        <h1>Test</h1>
        <Label value={bio} size="1.5em"/>
        <Link to="/">Come back to home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ author }) => ({ author })

export default connect(mapStateToProps)(TestScreen);