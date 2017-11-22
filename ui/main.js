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
