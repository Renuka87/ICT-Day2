import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var [num, Setnum] = useState(0)
    const add = () => { 
        console.log("clicked")
        Setnum(num+1)
        
    }
    const sub = () => {
        console.log("clicked")
        Setnum(num-1)
    }
  return (
      <div>
          <Typography variant='h3'>Count {num}</Typography>
          <Button variant="contained" color="success" onClick={add}>
              +</Button><br /><br />
          <Button variant="contained" color="error" onClick={sub}>
              -</Button>
          
          
      </div>
  )
}

export default Count