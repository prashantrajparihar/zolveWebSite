import React from "react";
import Webcam from "react-webcam";
import "react-image-crop/dist/ReactCrop.css";
import "../../styles/styles.css";
import CropImage from "./CropImage";

const Selfie = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [editnigMode, setEditnigMode] = React.useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const editPic = () => {
    setEditnigMode(true);
  };
  const stopEditingMode = () => {
    setEditnigMode(false);
  };
  return (
    <>
      <div className="selfieHeader">
        {!editnigMode && <h1 onClick={capture}>Click A Selfie</h1>}
        {!editnigMode && imgSrc && <h1 onClick={editPic}>Edit</h1>}
        {editnigMode && <h1 onClick={stopEditingMode}>Go Back</h1>}
      </div>
      {!editnigMode && (
        <div className="selfieDiv">
          <div className="webCam">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              imageSmoothing={true}
              forceScreenshotSourceSize="true"
              width={window.innerWidth > 620 ? 620 : 400}
            />
          </div>
          {!editnigMode && imgSrc && (
            <div className="webCam">
              <img
                src={imgSrc}
                alt=""
                style={{
                  width: window.innerWidth > 620 ? 620 : 400,
                }}
              />
            </div>
          )}
        </div>
      )}
      {editnigMode && <CropImage image={imgSrc} />}
    </>
  );
};

export default Selfie;
// window.innerWidth
