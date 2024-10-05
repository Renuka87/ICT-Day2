import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,Setname] = useState("Renuka")
  var [val,setVal]=useState()
    const Handleinput = e => {
        console.log(e.target.value)
        Setname(e.target.value)
    }
  const Handlesub = () => { 
    console.log("clicked")
    setVal(name)

  }

  return (
      <div>
          <Typography variant='h3'>WELCOME {val}</Typography>
      <TextField variant='outlined' onChange={Handleinput} /><br /><br />
      <Button variant="contained" color="error" onClick={Handlesub}>Submit</Button>
    </div>
  )
  }

export default StateBasics