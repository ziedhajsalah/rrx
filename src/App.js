import React from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.css'
import './App.css'
import { Navbar } from './modules'


const App = ({children, location}) => (
  <div>
    <Navbar path={location.pathname} />
    <div>{children}</div>
  </div>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default App
