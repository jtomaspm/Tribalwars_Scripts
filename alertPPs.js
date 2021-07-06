// ==UserScript==
// @name      alertPPs
// @include     https://*pt79*screen=market&mode=exchange*
// @author       PopAndBoom
// ==/UserScript==

//premium_exchange_stock_wood
//premium_exchange_stock_stone
//premium_exchange_stock_iron
//https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3

var wood = parseInt(document.getElementsByClassName("premium-exchange-sep")[0].innerText);
var stone = parseInt(document.getElementsByClassName("premium-exchange-sep")[3].innerText);
var iron = parseInt(document.getElementsByClassName("premium-exchange-sep")[6].innerText);

var min = 450;
var minn = 9999999;

if(wood < min || stone < min || iron < min){
   playSound();
   }else{
       var delay = 20000;
        setTimeout(function() {
        window.location.reload();
        }, delay);
   }


function playSound(){
    var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3');
    audio.play();
}