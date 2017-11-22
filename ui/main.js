console.log('Loaded!');
var element =document.getElementById('raghul');
var img = document.getElementById('f');
var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft +1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
  var interval = setInterval(moveRight,50);   
};
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var marginLeft = 0;
}
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}