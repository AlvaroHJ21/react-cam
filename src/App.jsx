import { useRef } from 'react';

function App() {
  const videoRef = useRef(null);

  // useEffect(() => {

  //   return () => {};
  // }, []);

  const usarCamera = () => {
    // Acceso a la cámara
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          // var videoElement = document.getElementById('video');
          videoRef.current.srcObject = stream;
        })
        .catch(function (error) {
          console.error('Error al acceder a la cámara: ', error);
        });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <h1>React cam</h1>
      <video ref={videoRef} id="video" autoPlay></video>
      <button onClick={usarCamera} className="btn btn-primary">
        Usar cam
      </button>
    </div>
  );
}

export default App;
