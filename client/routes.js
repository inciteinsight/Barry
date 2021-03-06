import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, Test} from './components'
import {me} from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div style={{height: screen.height}}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {isLoggedIn && (
            <Switch>
              <Route path="/home" component={UserHome} />
              <Route path="/test" component={Test} />
              <Route path="/" component={UserHome} />
            </Switch>
          )}
          <Route component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
