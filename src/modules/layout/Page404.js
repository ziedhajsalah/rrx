import React from 'react'
import { Button } from 'semantic-ui-react'
import { browserHistory} from 'react-router'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  }
}

export default function Page404 () {
  return (
    <div style={styles.root}>
      <h1>Page 404</h1>
      <Button onClick={() => browserHistory.push('/')}>Go HOME</Button>
    </div>
  )
}
