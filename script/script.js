

//function to play and pause the audio


function playAudio() {
    
        // accessing elements to work upon
        var Audio = document.getElementById('myaudio'); 
        var btn = document.getElementById('play');
            

        //checking for pause and play
        if (Audio.paused==true) {
            Audio.play();
            btn.textContent = "Pause";
        }
        else {
            Audio.pause();
            btn.textContent = "Play";
        }
    

}


