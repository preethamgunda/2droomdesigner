import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import MainHomeImg from "./mainHomeimage.jpg";
import "./MainHome.css";
import Footer from "../Footer/Footer";
import BedRoomM from "./bed_room_main.jpg";
import LivingRoomM from "./living_room_home.jpg";
import DiningRoomM from "./dining_room_main.jpg";

const MainHome = () => {
  const [button, setButton] = useState(false);
  const [room, setRoom] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState(false);
  const [roomtype, setRoomType] = useState("");
  const navigate = useNavigate();
  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

  const startbutton = () => {
    if (roomtype === "") {
      setError(true);
    } else {
      navigate("/room_designer");
    }
  };
  const projectName = (event) => {
    setProject(event.target.value);
  };
  const roomType = (event) => {
    setRoomType(event.target.value);
  };
  localStorage.setItem("RoomSelect", roomtype);
  return (
    <>
      <div className="MainHome">
        <div className="main-card-design">
          <div className="text">
            <h1> 2D ROOM DESIGNER</h1>

            <p style={{ marginTop: "30px", fontSize: "17px" }}>
              Using this website you can design your room using various designs
              and components that are provided.
            </p>
            <p style={{ marginTop: "30px", fontSize: "15px" }}>
              The whole process can be wrapped up in less than 10 minutes.
            </p>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginRight: "250px",
                  marginTop: "30px",
                }}
              >
                Name of the Project
              </p>
              <TextField
                id="margin-none"
                placeholder="Give a name to your project (optional) "
                style={{ width: "400px" }}
                onChange={projectName}
              />
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginRight: "300px",
                }}
              >
                Room Type <span style={{ color: "#FC2947" }}>*</span>
              </p>

              <Select
                placeholder="Ex:Bedroom"
                value={roomtype}
                style={{ width: "400px" }}
                onChange={roomType}
              >
                <MenuItem value={"BedRoom"}>BedRoom</MenuItem>
                <MenuItem value={"LivingRoom"}>LivingRoom</MenuItem>
                <MenuItem value={"DiningRoom"}>DiningRoom</MenuItem>
              </Select>
              <br></br>
              {error === true && (
                <p style={{ color: "#E21818", fontWeight: "bold" }}>
                  **Room type is required
                </p>
              )}
            </div>

            <button
              className="button"
              style={{ marginTop: "30px" }}
              onClick={startbutton}
            >
              Start
            </button>
          </div>
          <div className="onboardImage">
            <img src={MainHomeImg} style={{ width: "700px" }} />
          </div>
        </div>
        <div className="home-2">
          <p
            style={{
              marginTop: "600px",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Design the desired room of your choice.
          </p>
          <div className="image-grid">
            <div className="img1">
              <img
                src={DiningRoomM}
                style={{ width: "550px", height: "400px" }}
              />
              <h3>Dining Room</h3>
            </div>
            <div className="img2">
              <img src={BedRoomM} style={{ height: "400px", width: "550px" }} />
              <h3>Bed Room</h3>
            </div>
            <div className="img3">
              <img
                src={LivingRoomM}
                style={{ height: "400px", width: "550px" }}
              />
              <h3>Living Room</h3>
            </div>
            <div className="img4">
              <h3>Many more....</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
