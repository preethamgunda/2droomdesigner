import React from "react";
import RectangleDesign from "./RectangleDesign";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./Room.css";
import { IconButton, TextField } from "@mui/material";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DesignLengthContext } from "../context/DesignLengthContext";
import Diningroom from "./Images/Diningroom_1.jpg";
import DiningRoom2 from "./Images/Diningroom_2.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import LivingRoom from "./Images/LivingRoom.jpg";
import BedRoom from "./Images/BedRoom.jpg";
import Icon1 from "./img/living_room_bump_outs.jpg";
import Icon2 from "./img/png-transparent-black-rectangle-border-miscellaneous-angle-white-thumbnail.png";
import Shape1 from "./Images/shape 1.png";
import Shape2 from "./Images/shape 2.png";
import Shape3 from "./Images/shape 3.png";
import Shape4 from "./Images/shape 4.png";
import Shape5 from "./Images/shape 5.png";
import Shape6 from "./Images/shape 6.png";
const Room = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const [transform, setTransform] = useState(0);
  const [loadImg, setLoadImg] = useState("");
  const [displayStartButton, setDisplayStartButton] = useState(false);
  const rooom = localStorage.getItem("RoomSelect");
  const [dr01, setDr01] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (button === true) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [button, setButton] = React.useState(false);
  const [button1, setButton1] = React.useState(false);
  const [button2, setButton2] = React.useState(false);
  const [button3, setButton3] = React.useState(false);
  const [button4, setButton4] = React.useState(false);
  const [button5, setButton5] = React.useState(false);
  const [brstbtn, setBdstbtn] = useState(false);

  const loadRectangle = () => {
    if (button === false) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  const handleImageClickDr = () => {
    setLoadImg("DiningRoom");
    setDisplayStartButton(true);
  };
  const handleImageClickLr = () => {
    setLoadImg("LivingRoom");
  };
  const handleImageClickBr = () => {
    setLoadImg("BedRoom");
    setBdstbtn(true);
  };
  const [val, setVal] = React.useState(300);
  const [width, setWidth] = useState(600);

  const handleplus = (event) => {
    setVal(val + 50);
    if (val >= 500) {
      setVal(val);
      return;
    }
  };

  const handleminus = () => {
    val > 300 && setVal(val - 50);
  };

  const handlepluswidth = () => {
    setWidth(width + 50);
    if (width >= 850) {
      setWidth(width);
      return;
    }
  };

  const handleminuswidth = () => {
    setWidth(width - 50);
  };
  const rotatenindeg = () => {
    setTransform(transform + 90);
  };

  const cssData = {
    height: val,
    width: width,
    transform: transform,
  };
  sessionStorage.setItem("sheight", val);
  sessionStorage.setItem("swidth", width);
  sessionStorage.setItem("stransform", transform);

  return (
    <>
      {/* <Box sx={{ flexGrow: 3 }}>
    <Grid container spacing={3}>
    <Grid item xs={4}>
      <div>Step {activeStep} Of 3
      {activeStep===1 && <Design1/>}
      {activeStep===2 && <Design2/>}
      </div>
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      style={{marginTop:"500px"}}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
    </Grid>
    </Grid>
    </Box>
     */}
      {/* <Box sx={{ width: "100%" }}>
        <LinearProgress  />
      </Box> */}

      <div className="total_page">
        <div className="sidemenu">
          <p className="step">Step {activeStep} of 3</p>
          {activeStep == 1 && (
            <div>
              <h3>Room Shape</h3>
              <p>Select one of the basic room shapes below</p>
            </div>
          )}
          {activeStep === 1 && (
            // <IconButton onClick={loadRectangle}>
            //   {<RectangleOutlinedIcon />}
            // </IconButton>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img
                    src={Shape1}
                    onClick={() => {
                      if (button === false) {
                        setButton(true);
                        setButton1(false);
                        setButton2(false);
                        setButton3(false);
                        setButton4(false);
                        setButton5(false);
                      } else {
                        setButton(false);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      filter: button ? "blur(2px)" : "blur(0px)",
                    }}
                  />
                  <img
                    src={Shape2}
                    onClick={() => {
                      if (button1 === false) {
                        setButton1(true);
                        setButton(false);
                        setButton2(false);
                        setButton3(false);
                        setButton4(false);
                        setButton5(false);
                      } else {
                        setButton1(false);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      filter: button1 ? "blur(2px)" : "blur(0px)",
                    }}
                  />
                  <img
                    src={Shape3}
                    style={{
                      cursor: "pointer",
                      filter: button2 ? "blur(2px)" : "blur(0px)",
                    }}
                    onClick={() => {
                      if (button2 === false) {
                        setButton2(true);
                        setButton1(false);
                        setButton3(false);
                        setButton4(false);
                        setButton5(false);
                        setButton(false);
                      } else {
                        setButton2(false);
                      }
                    }}
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={Shape4}
                    style={{
                      cursor: "pointer",
                      filter: button3 ? "blur(2px)" : "blur(0px)",
                    }}
                    onClick={() => {
                      if (button3 === false) {
                        setButton3(true);
                        setButton1(false);
                        setButton2(false);
                        setButton4(false);
                        setButton5(false);
                        setButton(false);
                      } else {
                        setButton3(false);
                      }
                    }}
                  />
                  <img
                    src={Shape5}
                    style={{
                      cursor: "pointer",
                      filter: button4 ? "blur(2px)" : "blur(0px)",
                    }}
                    onClick={() => {
                      if (button4 === false) {
                        setButton4(true);
                        setButton1(false);
                        setButton2(false);
                        setButton3(false);
                        setButton5(false);
                        setButton(false);
                      } else {
                        setButton4(false);
                      }
                    }}
                  />
                  <img
                    src={Shape6}
                    style={{
                      cursor: "pointer",
                      filter: button5 ? "blur(2px)" : "blur(0px)",
                    }}
                    onClick={() => {
                      if (button5 === false) {
                        setButton5(true);
                        setButton1(false);
                        setButton2(false);
                        setButton3(false);
                        setButton4(false);
                        setButton(false);
                      } else {
                        setButton5(false);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <h3>Room Dimensions</h3>
              <p>
                Use the provided buttons based the custom dimensions required
              </p>
              <p>Max Height allowed = 500px</p>
              <p>Max Width allowed = 850px </p>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <Box sx={{ flexGrow: 1 }}>
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
                      <IconButton onClick={handleplus}>
                        {<AddIcon />}
                      </IconButton>
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
              </Box>
            </div>
          )}
          {activeStep === 3 && (
            <div>
              <h3>Room Design And Download</h3>
              <p>
                Select the required objects that you need in designing your
                room. The objects can be dragged and dropped in the desired
                location in the selected shape. Object selection can be repeated
                any number of times. Make sure you save the design after
                completion to avoid data loss.
              </p>
              {rooom === "DiningRoom" && (
                <div className="image-click">
                  <img
                    src={Diningroom}
                    style={{
                      width: "200px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClickDr}
                  />
                </div>
              )}
              {
                <div>
                  {displayStartButton === true && (
                    <button
                      className="button"
                      style={{ marginTop: "10px" }}
                      onClick={() => {
                        navigate("/2d-room-design-dining-room-template-0001");
                      }}
                    >
                      Start
                    </button>
                  )}
                </div>
              }
              {rooom === "LivingRoom" && (
                <div className="image-clickLr">
                  <img
                    src={LivingRoom}
                    style={{
                      width: "200px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClickLr}
                  />
                </div>
              )}
              {rooom === "BedRoom" && (
                <div className="image-clickBr">
                  <img
                    src={BedRoom}
                    style={{
                      width: "300px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClickBr}
                  />
                  {brstbtn === true && (
                    <button
                      className="button"
                      style={{ marginTop: "10px" }}
                      onClick={() => {
                        navigate("/2d-room-design-bed-room-template-0001");
                      }}
                    >
                      Start
                    </button>
                  )}
                </div>
              )}
              {rooom === "" && (
                <div className="image-clickLr">
                  <h1>No theme selected</h1>
                </div>
              )}
              {/* <img
                  src={Diningroom}
                  style={{ width: "200px", cursor: "pointer" }}
                  onClick={handleImageClick}
                />
                <img
                  src={Diningroom}
                  style={{
                    width: "200px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                />
                <img
                  src={Diningroom}
                  id="dining"
                  style={{ width: "200px", cursor: "pointer" }}
                  onClick={handleImageClick}
                /> */}
            </div>
          )}

          <MobileStepper
            className="mobilestepper"
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === 3}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
        <div className="right-container">
          {button === true && (
            <DesignLengthContext.Provider value={cssData}>
              <div
                style={{
                  marginTop: "60px",
                  marginRight: "70px",
                  marginLeft: "10px",
                }}
              >
                <RectangleDesign loading={loadImg} />
              </div>
            </DesignLengthContext.Provider>
          )}
          {button1 === true && <div className="outline-l"></div>}
        </div>
      </div>
    </>
  );
};

export default Room;
