// Establish all variables that  we will use
let canvas , context ,maximum_value, 
minimum_value, sections, XScale,YScale

// initiating the values of each graph item

let itemValue =[]
for (var z = 0; z < 150; z++)
{
    let q = Math.floor((Math.random() < 0.5 ? -(Math.random() * 10 + 10) : Math.random() * 10 + 10));
    itemValue.push(q);
    q = 0;
    itemValue.push(q);
}


let coOrdinate = [];

for (var j = 0; j < 290; j++)
{
let q = Math.floor((Math.random() < 0.2 ? Math.floor(Math.random()) : Math.random() * 10 + 5));
coOrdinate.push(q)
}
let r = Math.floor(Math.random() * 10 + 20);
let r2 = Math.floor(Math.random() * 10 + 30);
itemValue[16] = r;
itemValue[34] = r2;
// console.log(r)
// console.log(coOrdinate);

var elementList =[]



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




