import React, { useState } from "react";
import "./homeStyle.css";
import { projectDb } from "../../firebase/firebaseConfig";
import Webcam from "react-webcam";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      setImgSrc(imageSrc);
      fetch(imageSrc).then((res) => {
        res.blob().then((blob) => {
          console.log("asdas");
          // let link = document.createElement("a");
          // link.download = "img.jpeg";
          // imageSrc.link.href = URL.createObjectURL(blob);

          // link.click();

          // URL.revokeObjectURL(link.href);
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "img.jpeg";
          a.click();
        });
      });
    },
    [webcamRef, setImgSrc]
  );
  const submitForm = () => {};
  return (
    <div className="home-container">
      <div className="container">
        <div className="text">
          <h1>Fill up this form!</h1>
          <form className="form">
            <Webcam
              audio={false}
              ref={webcamRef}
              mirrored={true}
              screenshotFormat="image/jpeg"
            />
            <button onClick={(e) => capture(e)}>Capture photo</button>
            {imgSrc && <img src={imgSrc} />}
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              id="login-button"
              onSubmit={(e) => submitForm(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
