import React, { useState } from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { TextRotateVerticalOutlined } from "@mui/icons-material";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Picture.css";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/joy";
const Picture = ({
  url,
  id,
  board,
  idx,
  setBoard,
  viewOptions,
  setViewOptions,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const [options, setOptions] = useState(false);
  const [rightrotate, setRightrotate] = useState(false);
  const [leftrotate, setLeftRotate] = useState(false);
  const [value, setValue] = useState(0);
  const [vervalue, setverValue] = useState(0);
  const [pos, setPos] = useState("");
  const [ro, setRo] = useState(0);
  const [cross, setCross] = useState(false);
  // const fullRotate = () => {
  //   if (rightrotate === true) {

  //   }

  return (
    <div className="image">
      <img
        ref={drag}
        src={url}
        width={"100px"}
        style={{
          border: isDragging ? "5px solid pink" : "0px",
          cursor: "pointer",
          // rotate: rightrotate ? "90deg" : "0deg",
          // rotate: leftrotate ? "-90deg" : "0deg",
          transform: `rotate(${ro}deg)`,
          position: `${pos}`,
          left: `${value}px`,
          top: `${vervalue}px`,
        }}
        onClick={() => {
          if (options === false) {
            setOptions(true);
          } else {
            setOptions(false);
          }
        }}
      />

      {options === true && (
        <div>
          <IconButton
            onClick={() => {
              const newState = [...board];
              newState.splice(idx, 1);
              setBoard(newState);
            }}
            color="error"
          >
            <Tooltip title="Delete">
              <DeleteIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() => {
              setRo(ro + 90);
              if (rightrotate === false) {
                setRightrotate(true);
              } else {
                setRightrotate(false);
              }
            }}
          >
            <RotateRightIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setOptions(false);
            }}
          >
            <Tooltip title="Disable the options">
              <CloseIcon />
            </Tooltip>
          </IconButton>

          {/* <IconButton
            onClick={() => {
              if (leftrotate === false) {
                setLeftRotate(true);
              } else {
                setLeftRotate(false);
              }
            }}
          >
            <RotateLeftIcon />
          </IconButton> */}
          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={0}
              valueLabelDisplay="auto"
              max={`${sessionStorage.getItem("swidth") - 110}`}
              onChange={(event) => {
                setPos("absolute");
                setValue(event.target.value);
              }}
              style={{ color: "#817E7E" }}
            />
          </Box>
          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              max={`${sessionStorage.getItem("sheight") - 110}`}
              onChange={(event) => {
                setPos("absolute");
                setverValue(event.target.value);
              }}
              style={{ color: "#817E7E" }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Picture;
