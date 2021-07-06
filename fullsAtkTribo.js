// ==UserScript==
// @name      Contar Fulls Atk Tribo
// @include     https://*pt72*mode=members_troops*
// @author       PopAndBoom
// ==/UserScript==

var fulls = 0;
var rows = document.getElementsByClassName('vis w100')[0].rows;
for(var i = 0; i<rows.length; i++){
    var last = rows[i];
    var cell = last.cells[3];
    var value = parseInt(cell.innerHTML);
    if (value > 4000){
        fulls++;
    }
}

document.getElementsByTagName('h2')[0].innerHTML = ": " + fulls + " fulls de ataque";