import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import { IconButton } from "@mui/material";
import "./RectangleDesign.css";
import RectangleDesign from "./RectangleDesign";
import Design2 from "./Design2";

const Design1 = () => {
  const [button, setButton] = React.useState(false);
  const loadRectangle = () => {
    setButton(true);
  };

  return (
    <>
      <div style={{ marginRight: "1250px" }}>
        <IconButton onClick={loadRectangle}>
          {<RectangleOutlinedIcon />}
        </IconButton>
      </div>
      <div className="container" style={{ marginLeft: "750px" }}>
        {button === true && <RectangleDesign />}
      </div>
    </>
  );
};

export default Design1;
