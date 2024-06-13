import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const CameraPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const loadModelAndRunDetection = async () => {
      if (navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await new Promise((resolve) => videoRef.current?.addEventListener('loadedmetadata', resolve));
          videoRef.current.play();
        }
      } else {
        console.error('getUserMedia not supported in this browser.');
        return;
      }

      const model = await tf.loadGraphModel('https://raw.githubusercontent.com/your-github-username/your-repo-name/main/yolov8n_web_model/model.json');

      const runDetection = async () => {
        if (videoRef.current) {
          const pixels = tf.browser.fromPixels(videoRef.current);
          if (model.inputs[0] && model.inputs[0].shape && model.inputs[0].shape.length >= 3) {
            const resized = tf.image.resizeBilinear(pixels, [model.inputs[0].shape[1], model.inputs[0].shape[2]]);
            const casted = resized.cast('int32');
            const expanded = casted.expandDims(0);
            const obj = await model.executeAsync(expanded);
            console.log(obj);
            requestAnimationFrame(runDetection);
          } else {
            console.error('model.inputs[0] or model.inputs[0].shape is undefined or has less than 3 elements');
          }
        }
      };

      runDetection();
    };

    loadModelAndRunDetection();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay={true} playsInline={true} width="640" height="480" />
    </div>
  );
};

export default CameraPage;

/*
return (
  <div className="relative w-[100vw] h-[85vh] bg-black overflow-hidden">
    {infoPopupVisible && (
      <div className="infoPopup">
        Object recognized: {recognizedObject}
      </div>
    )}
    <video ref={videoRef} autoPlay={true} playsInline={true} className="absolute w-[100vw] h-[65vh] object-cover" />
    <div className="absolute w-[100vw] h-[20vh] bottom-0 left-0 bg-[#d01012]">
      <div className="absolute w-[20vw] h-[20vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
        <img className="w-1/2 h-1/2" alt="Camera" src="/LegoLens/images/cameraBlack.svg" width={50} height={50} />
      </div>
    </div>
    <div className="absolute w-20 h-20 top-0 left-0 bg-white rounded-full">
      <img className="w-full h-full" alt="Undo" src="/LegoLens/images/undo.svg" onClick={handleClick} width={50} height={50} />
    </div>
  </div>
);
*/