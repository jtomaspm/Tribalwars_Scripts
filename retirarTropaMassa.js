// ==UserScript==
// @name         retirar tropas massa
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pt79.tribalwars.com.pt/game.php?village=*&screen=place&mode=call&target=*
// @grant        none
// ==/UserScript==

var select = document.getElementById('place_call_select_all');

var spy_fields = document.getElementsByClassName("call-unit-box call-unit-box-spy");

var delay = 1000;
var clicked = false;

setTimeout(function() {
    select.click();
    for(var i = 0; i < spy_fields.length; i++){
        if(!spy_fields[i].value == ("")){
            if(parseInt(spy_fields[i].value) - 50 > 0){
                spy_fields[i].value = (parseInt(spy_fields[i].value) - 50);
            }else{
                spy_fields[i].value = 0;
            }
        }
    }
}, delay);



