import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
