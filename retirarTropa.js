// ==UserScript==
// @name         retirar tropa
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include    https://*screen=info_village*
// @grant        none
// ==/UserScript==

if(document.getElementById("units_select_all")){
    setTimeout(function() { document.getElementById("units_select_all").click(); }, 200);
 
     setTimeout(function() { $("[value='Retirada']")[0].click(); }, 10000);
 
 }
 
 setTimeout(function() {location.reload()}, 30000);
 
 
 
 