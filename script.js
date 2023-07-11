const videoElement = document.getElementById("video");
const pictureInPicture = document.getElementById("button-add");
const playButton = document.getElementById("button-play");
const pauseButton = document.getElementById("button-pause");

// play video
function playVideo() {
  videoElement.play();
}

// pause video
function pauseVideo() {
  videoElement.pause();
}

// for picture in picture
async function togglePictureInPicture() {
  try {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  } catch (error) {
    console.log("whoop, error here", error);
  }
}

pictureInPicture.addEventListener("click", togglePictureInPicture);
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);

// On Load
selectMediaStream();
