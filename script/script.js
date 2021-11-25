let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let playBtn = document.querySelector(".playBtn");
let audio = document.querySelector("audio");

var timer;


//Play and Pause Function
let isAudioPlay = true;

const togglePlay = () => {
    if (isAudioPlay) {
      audio.play();
      isAudioPlay = false;
      playBtn.innerHTML = `Pause`;
    } else {
      audio.pause();
      isAudioPlay = true;
      playBtn.innerHTML = `Play`;
    }
  };

  
//Event listener for Play / Pause audio
playBtn.addEventListener("click", togglePlay);
