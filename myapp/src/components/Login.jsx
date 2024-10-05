import React from 'react'
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
      <div>
          <h1>LOGIN PAGE</h1>
          <TextField label='Name' variant='outlined' /><br /><br />
          <TextField label='password' variant='outlined' /><br /><br />
          <TextField label='Email' variant='filled' /><br /><br />

          <Button variant='contained'>Submit</Button>


    </div>
  )
}

export default Login