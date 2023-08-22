import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [button, setButton] = useState(false);
  const navigate = useNavigate();
  const startbutton = () => {
    setButton(true);
    if (button === true) {
      navigate("/design_bedroom");
    }
  };
  return (
    <div className="container">
      <h1>Start Designing Your Room Here</h1>
      <p>
        Using our website you can design your room using various designs and
        components that are provided. The whole process can be wrapped up in
        less than 10 minutes.
      </p>

      <Button
        variant="soft"
        endDecorator={<KeyboardArrowRight />}
        color="info"
        onClick={startbutton}
      >
        Start
      </Button>
    </div>
  );
};
export default Home;
