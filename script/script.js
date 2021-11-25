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



  //function for random value between range
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};


//To get canvas offSetLeft position
let canvasLeft = canvas.offsetLeft;


  //Array contains bar graph position values
let graphData = [];

function graph() {
  for (let i = 1; i < 400; i += 3) {
    graphData.push({
      colour: "#fff",
      width: 1,
      height: randomNumber(20, 70),
      top: randomNumber(30, 70),
      left: i,
    });
  }
}

graph()



//Creating context in the canvas by bar graph data
graphData.forEach((el) => {
  context.fillStyle = el.colour;
  context.fillRect(el.left, el.top, el.width, el.height);
});


//Function for set current audio time to bar graph
const setTimelineValue = () => {
  let currentTime = Math.floor(audio.currentTime);
  if (currentTime == Math.floor(audio.duration)) {
    togglePlay();
  }
  graphData.forEach((el, i) => {
    if (currentTime >= i) {
      context.fillStyle = "rgb(58 201 235)";
    } else {
      context.fillStyle = "#fff";
    }
    context.fillRect(el.left, el.top, el.width, el.height);
  });
};

//Event listener for getting current time of playing audio
audio.addEventListener("timeupdate", setTimelineValue);



