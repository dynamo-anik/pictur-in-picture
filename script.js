const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select video stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (ex) {
    console.log('whoops error here', ex);
  }
}

button.addEventListener('click', async () => {
  //disable button

  button.disabled = true;
  //start picture in picture

  await videoElement.requestPictureInPicture();

  //reset button
  button.disabled = false;
});

//on load

selectMediaStream();
