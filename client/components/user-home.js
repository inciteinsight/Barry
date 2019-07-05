import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Parameters from './parameters'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3 className="m-3 text-center">Welcome, {email}</h3>
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
