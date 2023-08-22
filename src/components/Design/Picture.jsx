import React, { useState } from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { TextRotateVerticalOutlined } from "@mui/icons-material";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

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
  return (
    <div>
      <img
        ref={drag}
        src={url}
        width={"100px"}
        style={{
          border: isDragging ? "5px solid pink" : "0px",
          cursor: "pointer",
          rotate: rightrotate ? "90deg" : "0deg",
          // rotate: leftrotate ? "-90deg" : "0deg",
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
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
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
              if (leftrotate === false) {
                setLeftRotate(true);
              } else {
                setLeftRotate(false);
              }
            }}
          >
            <RotateLeftIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Picture;
