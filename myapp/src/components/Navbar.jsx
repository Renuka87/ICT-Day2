import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
          <AppBar position='static'>
              <Toolbar>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                      MYAPP</Typography>
                  <Link to='/log'>
                      <Button variant="contained" color='error' >LOGIN</Button><br/>
                  </Link> &nbsp;&nbsp;
         
                  <Link to='/sign'>
                      <Button variant="contained" color='secondary' >SIGNIN</Button>
                  </Link>&nbsp;&nbsp;

                  <Link to='/state'>
                      <Button variant="contained" color='success' >STATE</Button>
                  </Link> &nbsp;
                  <Link to='/count'>
                      <Button variant="contained" color='secondary' >COUNT</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/p'>
                      <Button variant="contained" color='error' >PRINT</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/a'>
                      <Button variant="contained" color='primary' >API</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/pk'>
                      <Button variant="contained" color='success' >POKEMON</Button>
                  </Link>
                  
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
