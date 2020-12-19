
let audio = document.getElementById('audio');
let playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;
let volume = document.querySelector("#volume-control");


/*===========================================Play and pause bttn=================================================================================*/
function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause II ";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play ";
	}
}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ";
}
/*============================================the index bg music=================================================================================*/
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.loop = true
    audio.play();
  });
  /*================================================Volume=============================================================================*/
 

  volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
    })


    

 