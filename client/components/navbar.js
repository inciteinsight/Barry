import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 className="text-center">WRITTEN EXAM</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/home">
            <Button variant="primary">Home</Button>
          </Link>
          <a href="#" onClick={handleClick}>
            <Button variant="primary">Logout</Button>
          </a>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
