import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const PhotoCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setCapturedImage(screenshot);
  };

  const handleFileChange = (e) => {
    setFileImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (fileImage) {
      formData.append("photo", fileImage);
    } else if (capturedImage) {
      const blob = await fetch(capturedImage).then(res => res.blob());
      formData.append("photo", blob, `webcam_${Date.now()}.jpg`);
    } else {
      alert("No image to upload");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/upload-image", formData);
      alert("Photo uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h4>Capture with Webcam</h4>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <br />
      <button onClick={capturePhoto}>Capture Photo</button>
      {capturedImage && <img src={capturedImage} alt="Captured" width={160} />}
      
      <h4>OR Upload From Device</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {fileImage && <p>Selected: {fileImage.name}</p>}

      <br />
      <button onClick={handleUpload}>Upload Photo</button>
    </div>
  );
};

export default PhotoCapture;
