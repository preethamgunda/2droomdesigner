import React, { useState } from "react";
import "./RectangleDesign.css";
import Grid from "@mui/material/Grid";
import { DesignLengthContext } from "../context/DesignLengthContext";
import Diningroom from "./Images/Diningroom_1.jpg";
import LivingRoom from "./Images/LivingRoom.jpg";
import BedRoom from "./Images/BedRoom.jpg";
const RectangleDesign = ({ loading,edit }) => {
  return (
    <Grid>
      <DesignLengthContext.Consumer>
        {(cssData) => {
          return (
            <>
              <div
                className="rectangle"
                style={{
                  height: `${cssData?.height}px`,
                  width: `${cssData?.width}px`,
                  transform: `rotate(${cssData?.transform}deg)`,
                }}
              >
                {loading === "DiningRoom" && (
                  <img
                    src={Diningroom}
                    style={{
                      height: `${(cssData?.height)-10}px`,

                      width: `${(cssData?.width)-10}px`,
                    }}
                  />
                )}
                {loading === "LivingRoom" && (
                  <img
                    src={LivingRoom}
                    style={{
                      width: `${cssData?.width}px`,
                      height: `${cssData?.height}px`,
                    }}
                  />
                )}
                {loading === "BedRoom" && (
                  <img
                    src={BedRoom}
                    style={{
                      width: `${cssData?.width}px`,
                      height: `${cssData?.height}px`,
                    }}
                  />
                )}
              </div>
            </>
          );
        }}
      </DesignLengthContext.Consumer>
    </Grid>
  );
};

export default RectangleDesign;
