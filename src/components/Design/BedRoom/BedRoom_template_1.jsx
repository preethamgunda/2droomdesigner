import React from "react";

const BedRoom_template_1 = () => {
  return (
    <>
      <div className="main">
        <div className="options">
          <div className="left_screen">
            <div className="left_screen_1">
              <div>
                <div
                  style={{
                    backgroundColor: themebutton
                      ? "rgba(41, 47, 45, 0.348)"
                      : "rgba(163, 163, 176, 0.27)",
                  }}
                >
                  <Tooltip title="Themes">
                    <IconButton onClick={loadTheme}>
                      <BrushIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    backgroundColor: furbutton
                      ? "rgba(41, 47, 45, 0.348)"
                      : "rgba(163, 163, 176, 0.27)",
                  }}
                >
                  <Tooltip title="Furniture">
                    <IconButton onClick={loadFurniture}>
                      <ChairIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <Tooltip title="Measurements">
                  <IconButton onClick={loadSize}>
                    <DesignServicesIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="left_screen_2">
              {furbutton === true && (
                <div>
                  <h4>Furniture</h4>
                  <p>Select from the below Objects</p>
                  <div className="Pictures">
                    {pictureList.map((picture) => {
                      return (
                        <Picture
                          url={picture.url}
                          id={picture.id}
                          viewOptions={viewOptions}
                          setViewOptions={setViewOptions}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
              {sbutton === true && (
                <div>
                  Measurements Of the Room
                  <h6>Room Height {sessionStorage.getItem("sheight")}px</h6>
                  <h6>Room Width {sessionStorage.getItem("swidth")}px</h6>
                </div>
              )}
              {themebutton === true && (
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    Floor Themes
                  </p>

                  <div className="images-themes" style={{ marginTop: "20px" }}>
                    {/* <img
                src={Theme1}
                style={{
                  width: "100px",
                  marginRight: "15px",
                }}
              />
              <img src={Theme2} style={{ width: "100px" }} />
              <img
                src={Theme3}
                style={{
                  width: "100px",
                  marginRight: "15px",
                }}
              />
              <img src={Theme4} style={{ width: "100px" }} /> */}
                    <div className="theme1">
                      <img
                        src={FloorTheme1}
                        style={{
                          width: "100px",
                          // marginRight: "15px",
                          border: ft1 ? "2px solid" : "0px",
                          filter: ft1 ? "blur(2px)" : "blur(0px)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (ft1 === false) {
                            setft1(true);
                            setft2(false);
                            setft3(false);
                            setft4(false);
                          } else {
                            setft1(false);
                          }
                        }}
                      />
                      <h6 style={{ margin: "auto" }}>Chocolate Brown</h6>
                    </div>
                    <div>
                      <img
                        src={FloorTheme2}
                        style={{
                          width: "100px",
                          marginRight: "15px",
                          border: ft2 ? "2px solid" : "0px",
                          filter: ft2 ? "blur(2px)" : "blur(0px)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (ft2 === false) {
                            setft2(true);
                            setft3(false);
                            setft1(false);
                            setft4(false);
                          } else {
                            setft2(false);
                          }
                        }}
                      />
                      <h6 style={{ margin: "auto" }}>Plank Wood</h6>
                    </div>
                    <div className="theme3">
                      <img
                        src={FloorTheme3}
                        style={{
                          width: "100px",
                          height: "65px",
                          // marginRight: "15px",
                          border: ft3 ? "2px solid" : "0px",
                          filter: ft3 ? "blur(2px)" : "blur(0px)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (ft3 === false) {
                            setft3(true);
                            setft1(false);
                            setft2(false);
                            setft4(false);
                          } else {
                            setft3(false);
                          }
                        }}
                      />
                      <h6 style={{ margin: "auto" }}>Clumsy Plank</h6>
                    </div>
                    <div className="theme4">
                      <img
                        src={FloorTheme4}
                        style={{
                          width: "100px",
                          height: "65px",
                          border: ft4 ? "2px solid" : "0px",
                          filter: ft4 ? "blur(2px)" : "blur(0px)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (ft4 === false) {
                            setft4(true);
                            setft3(false);
                            setft1(false);
                            setft2(false);
                          } else {
                            setft4(false);
                          }
                        }}
                      />
                      <h6 style={{ margin: "auto" }}>Marble</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="second-header">
            <div>
              {/* <IconButton>
          <DownloadIcon
            onClick={() => {
              const captureArea = document.getElementById("capture-area");
              console.log(captureArea);
              const options = {
                windowWidth: `${sessionStorage.getItem("swidth")}px`,
                windowHeight: `${sessionStorage.getItem("sheight")}px`,
              };

              // Use html2canvas to capture the area
              html2canvas(captureArea, options).then((canvas) => {
                // Convert the canvas content to a data URL
                const dataURL = canvas.toDataURL("image/png");
                console.log(dataURL);

                // Create a download link
                const downloadLink = document.createElement("a");
                downloadLink.href = dataURL;
                downloadLink.download = "room_design.png";

                // Trigger the download
                downloadLink.click();
              });
            }}
          />
        </IconButton> */}
              {/* <ScreenCapture onEndCapture={handleScreenCapture}>
          {({ onStartCapture }) => (
            <div>
              <button onClick={onStartCapture}>Capture</button>

              
        <button>Capture your design</button> */}
              <IconButton
                onClick={() => {
                  if (window.confirm("Are you sure you wanna clear?")) {
                    navigate("/");
                  }
                }}
              >
                <ClearIcon />
              </IconButton>
            </div>
          </div>
          <div className="right_screen">
            {/* <h5 style={{ margin: "auto" }}>
        {sessionStorage.getItem("swidth")} px *
        {sessionStorage.getItem("sheight")}px
      </h5>
      <div
        className="horizontal-measure"
        style={{ width: `${sessionStorage.getItem("swidth")}px` }}
      ></div>

      <div
        className="vertical-measure"
        style={{
          width: `${sessionStorage.getItem("sheight")}px`,
          // marginLeft: `${sessionStorage.getItem("swidth") - 200}px`,
        }}
      ></div> */}
            {/* <ScreenCapture onEndCapture={handleScreenCapture}>
          {({ onStartCapture }) => (
            <div>
              <button onClick={onStartCapture}>Capture</button> */}
            <div
              className="Board"
              style={{
                width: `${sessionStorage.getItem("swidth")}px`,
                height: `${sessionStorage.getItem("sheight")}px`,
                transform: `rotate(${sessionStorage.getItem("stransform")}deg)`,
                margin: "auto",
                position: "relative",
                textAlign: "start",
              }}
              ref={drop}
            >
              {ft1 === true && (
                <div className="draggo">
                  <img
                    src={FloorTheme1}
                    style={{
                      width: `${sessionStorage.getItem("swidth")}px`,
                      height: `${sessionStorage.getItem("sheight")}px`,
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                    ref={drop}
                  />
                </div>
              )}
              {ft2 === true && (
                <img
                  src={FloorTheme2}
                  style={{
                    width: `${sessionStorage.getItem("swidth")}px`,
                    height: `${sessionStorage.getItem("sheight")}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    position: "relative",
                  }}
                />
              )}
              {ft3 === true && (
                <img
                  src={FloorTheme3}
                  style={{
                    width: `${sessionStorage.getItem("swidth")}px`,
                    height: `${sessionStorage.getItem("sheight")}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    position: "relative",
                  }}
                />
              )}
              {ft4 === true && (
                <img
                  src={FloorTheme4}
                  style={{
                    width: `${sessionStorage.getItem("swidth")}px`,
                    height: `${sessionStorage.getItem("sheight")}px`,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    position: "relative",
                  }}
                />
              )}
              {board.map((picture, idx) => {
                return (
                  <Picture
                    url={picture.url}
                    id={picture.id}
                    board={board}
                    idx={idx}
                    setBoard={setBoard}
                  />
                );
              })}
            </div>
            {/* <center>
                <img src={screenCapture} alt="react-screen-capture" />
                <p>
                  {screenCapture && (
                    <button onClick={handleSave}>Download</button>
                  )}
                </p>
              </center>
            </div>
          )}
        </ScreenCapture> */}
          </div>
        </div>
      </div>
      <h6>hi</h6>
      <Footer />
    </>
  );
};

export default BedRoom_template_1;
