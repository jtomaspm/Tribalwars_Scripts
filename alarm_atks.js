// ==UserScript==
// @name      alarm atks
// @include     https://*pt72*
// ==/UserScript==

var atks = parseInt(document.getElementById("incomings_amount").innerHTML);

if(atks > -1){
    //window.open ("https://www.youtube.com/watch?v=UIBsSo0wSsU", "Som","menubar=0,resizable=0,width=50,height=30");
    playSound("https://onlinealarmkur.com/dist/mp3/clock.mp3");
}


function playSound(url) {
    var a = new Audio(url);
    a.play();
}

var delay = 288000;
setTimeout(function() {
window.location.reload()
}, delay);