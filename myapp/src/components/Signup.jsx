import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div><h1>SIGNIN PAGE</h1>
          
          <TextField label='Email' variant='filled' /><br /><br />
          <TextField label='password' variant='outlined' /><br /><br />
          
          <Button variant='contained'>Submit</Button>

          
      </div>
  )
}

export default Signup