import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import "./RectangleDesign.css";
import Grid from "@mui/material/Grid";
import { DesignLengthContext } from "../context/DesignLengthContext";
import RectangleDesign from "./RectangleDesign";

const Design2 = () => {
  const border = "10px solid #000";
  const [val, setVal] = React.useState(300);
  const [width, setWidth] = useState(600);

  const handleplus = (event) => {
    setVal(val + 50);
  };
  localStorage.setItem("height", val);
  const handleminus = () => {
    setVal(val - 50);
  };
  localStorage.setItem("height", val);
  const handlepluswidth = () => {
    setWidth(width + 50);
  };
  localStorage.setItem("width", width);
  const handleminuswidth = () => {
    setWidth(width - 50);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <p style={{ fontSize: "12px" }}>Room Height</p>
            <OutlinedInput
              id="outlined-adornment-password"
              value={`${val} px`}
              sx={{ m: -1, width: "20ch" }}
              style={{ marginBottom: "2px" }}
              startAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={handleminus}
                    style={{ marginRight: "5px" }}
                  >
                    {<RemoveIcon />}
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleplus}>{<AddIcon />}</IconButton>
                </InputAdornment>
              }
            />

            <p style={{ fontSize: "12px" }}>Room Width</p>
            <OutlinedInput
              id="outlined-adornment-password"
              value={`${width} px`}
              sx={{ m: -1, width: "20ch" }}
              style={{ marginBottom: "2px" }}
              startAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={handleminuswidth}
                    style={{ marginRight: "5px" }}
                  >
                    {<RemoveIcon />}
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handlepluswidth}>
                    {<AddIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default Design2;
