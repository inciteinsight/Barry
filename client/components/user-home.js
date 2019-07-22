import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive'
import Parameters from './parameters'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3 className="m-3 text-center">Welcome, {email}</h3>
      <p className="m-3 text-center">
        Please select your the song or speech to memorize.
      </p>
      <MediaQuery query="(min-device-width: 750px)">
        <p className="m-3 text-center">
          Please also select the type of hint. Think of them as guide words.
        </p>
      </MediaQuery>
      <hr />
      <Parameters />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
