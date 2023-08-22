import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import {Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

const DesignMenu = () => {
    
  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    <Box
      sx={{
        py: 2,
        display: 'container',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft:'500px',
        marginTop:'30px'
      }}
    >
      
      <Textarea name="Outlined" placeholder="Name Your Project(optional)" variant="outlined" />
    
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Room Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Select Your Room"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Bed Room</MenuItem>
          <MenuItem value={20}>Living Room</MenuItem>
          <MenuItem value={30}>Kitchen</MenuItem>
        </Select>
        <br></br>
        <Button size="md" color="neutral">
          <Link to="/design_bedroom"> Start</Link>
         
        </Button>
        
        
      </FormControl>
      </Box>
    </div>
  )
}

export default DesignMenu