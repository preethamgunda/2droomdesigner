import React from "react";
import html2canvas from "html2canvas";

const Compodown = () => {
  const handleDownloadClick = () => {
    const captureArea = document.getElementById("capture-area");

    // Use html2canvas to capture the area
    html2canvas(captureArea).then((canvas) => {
      // Convert the canvas content to a data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = "captured_area.png";

      // Trigger the download
      downloadLink.click();
    });
  };
  return (
    <div>
      {/* Content before the part you want to capture */}
      <div id="capture-area" style={{ border: "1px solid black" }}>
        {/* Content you want to capture goes here */}
        <p>This is the part to capture.</p>
      </div>

      {/* Content after the part you want to capture */}
      <button onClick={handleDownloadClick}>Download Captured Part</button>
    </div>
  );
};

export default Compodown;
