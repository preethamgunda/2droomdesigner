import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DesignMenu from "./components/Design/DesignMenu";
import { Routes, Route } from "react-router-dom";
import Room from "./components/Design/Room";
import RoomDesign from "./components/Design/RoomDesign";
import RectangleDesign from "./components/Design/RectangleDesign";
import Design1 from "./components/Design/Design1";
import Profile from "./components/Settings/Profile";
import Design2 from "./components/Design/Design2";
import Settings from "./components/Settings/Settings";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import MainHome from "./components/Home/MainHome";
import DiningRoom_template1 from "./components/Design/DiningRoom/DiningRoom_template1";
import { DesignLengthContext } from "./components/context/DesignLengthContext";
import Themes from "./components/Design/Furniture/Themes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Testt from "./components/Testt";
import { Download } from "@mui/icons-material";
import Compodown from "./components/Compodown";
import BedRoom_template_1 from "./components/Design/BedRoom/BedRoom_template_1";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  const [mode, setMode] = useState("light");
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline /> */}
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<MainHome />} />
            <Route path="/design_menu" element={<DesignMenu />} />
            <Route path="/room_designer" element={<Room />} />
            <Route path="/design_room" element={<RoomDesign />} />
            <Route path="/design_rectangle" element={<RectangleDesign />} />
            <Route path="/design/select-shape" element={<Design1 />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile_user_design2" element={<Design2 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Testt />} />
            <Route path="/download" element={<Compodown />} />
            <Route
              path="/2d-room-design-dining-room-template-0001"
              element={<DiningRoom_template1 />}
            />
            <Route
              path="/2d-room-design-bed-room-template-0001"
              element={<BedRoom_template_1 />}
            />
            <Route path="/floor-themes" element={<Themes />} />
          </Routes>
        </div>
        {/* </ThemeProvider> */}
      </DndProvider>
    </>
  );
}

export default App;
