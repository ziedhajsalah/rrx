import React from 'react'
import { Button, Grid, Form, Checkbox } from 'semantic-ui-react'

const styles = {
  root: {
    marginTop: '5%'
  }
}

export default function Signup () {
  return (
    <Grid centered style={styles.root}>
      <Grid.Column width={6}>
        <Form>
          <Form.Field>
            <label>Email:</label>
            <input type='email' />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type='password' />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password:</label>
            <input type='password' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the terms' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
