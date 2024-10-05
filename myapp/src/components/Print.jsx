import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Print = () => {
    var [val, Setname] = useState()
    const click1 = () => {
        console.log("clicked")
        Setname("Renu")
    }
    const click2 = () => {
        console.log("clicked")
        Setname("Diya")
    }
    const click3 = () => {
        console.log("clicked")
        Setname("Devu")
    }
    useEffect(() => { 
        Setname("hello")
    },[])

  return (
      <div>
          <Typography variant='h3'>CLICKED {val}</Typography>
          <Button variant="contained" color="error" onClick={click1}>
              Renu</Button><br /><br />
          <Button variant="contained" color="error" onClick={click2}>
              Diya</Button><br /><br />
          <Button variant="contained" color="error" onClick={click3}>
              Devu</Button><br /><br />
        </div>
  )
}

export default Print