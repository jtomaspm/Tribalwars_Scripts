// ==UserScript==
// @name         Script Cunhar Moedas
// @include    https://*screen=snob*
// @version      0.1
// @description  Cunha moedas na academia
// @author       Fmthemaster
// ==/UserScript==

var delay = 60; //secs

var multiplier = 1000*(1+0.2*Math.random());
setTimeout(function() {document.getElementById("coin_mint_fill_max").click()}, delay*multiplier);
setTimeout(function() {$("[value='Cunhar']")[0].click();}, delay*multiplier*1.01);
setTimeout(function() {location.reload()}, delay*multiplier*1.02);