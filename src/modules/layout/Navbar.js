import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { Menu } from 'semantic-ui-react'
import logo from '../../logo.svg'

export default function Navbar ({path}) {
  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item active={path === '/'}
          onClick={() => browserHistory.push('/')}>
          <img src={logo} alt='logo' />
          My Full Features List
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item active={path === '/signup'}
          onClick={() => browserHistory.push('/signup')}>
          Sign Up
        </Menu.Item>
        <Menu.Item active={path === '/login'}
          onClick={() => browserHistory.push('/login')}>
          login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Navbar.propTypes = {
  path: PropTypes.string.isRequired
}
