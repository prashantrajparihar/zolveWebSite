import React from "react";
import Webcam from "react-webcam";
import "react-image-crop/dist/ReactCrop.css";
import "../../styles/styles.css";
import CropImage from "./CropImage";

const Selfie = (props) => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [editnigMode, setEditnigMode] = React.useState(false);

  const capture = React.useCallback(() => {
    console.log("WebREF ---> ", webcamRef);
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const editPic = () => {
    setEditnigMode(true);
  };
  const stopEditingMode = () => {
    setEditnigMode(false);
  };

  console.log(props);
  return (
    <>
      <div className="selfieHeader">
        {!editnigMode && <h1>Click A Selfie To Edit</h1>}
        {editnigMode && <h1 onClick={stopEditingMode}>Go Back</h1>}

        {!editnigMode && (
          <div className="selfieDiv">
            <div className="webCam">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                imageSmoothing={true}
                width={480}
              />
            </div>
            {imgSrc && (
              <div>
                <div className="webCam">
                  <img src={imgSrc} alt="" className="image" />
                </div>
              </div>
            )}
          </div>
        )}

        {!editnigMode && <button onClick={capture}>Click Selfie</button>}
        {!editnigMode && imgSrc && (
          <button onClick={editPic}>Edit Selfie</button>
        )}
        {console.log("Image Source", imgSrc)}
        {editnigMode && <CropImage image={imgSrc} />}
      </div>
    </>
  );
};

export default Selfie;
