// ==UserScript==
// @name         buy Pps
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=en
// @grant        none
// @include https://*screen=market*
// ==/UserScript==

var min = 150;
var minn = 99999999999;

    if(parseInt(document.getElementById("premium_exchange_stock_wood").innerHTML)>min){
        document.forms[0].buy_wood.value=parseInt(document.getElementById("premium_exchange_stock_wood").innerHTML) ;
        if( document.forms[0].buy_wood.value>0){
       clickButton();
   }
    }


    else if(parseInt(document.getElementById("premium_exchange_stock_stone").innerHTML)>minn){
        document.forms[0].buy_stone.value=parseInt(document.getElementById("premium_exchange_stock_stone").innerHTML) ;
        if( document.forms[0].buy_stone.value>0){
       clickButton();
   }
    }

    else if(parseInt(document.getElementById("premium_exchange_stock_iron").innerHTML)>min){
        document.forms[0].buy_iron.value=parseInt(document.getElementById("premium_exchange_stock_iron").innerHTML) ;
        if( document.forms[0].buy_iron.value>0){
       clickButton();
   }
    }
    else{

        var delay = 500;
        setTimeout(function() {
        window.location.reload();
        }, delay);

    }


function clickButton()
{
    var buttons = document.getElementsByTagName('input');
    for(var i = 0; i < buttons.length; i++)
    {
       if(buttons[i].type == 'submit' && buttons[i].value == "Calcular melhor oferta ")
       {
           buttons[i].click();
           break; //this will exit for loop, but if you want to click every button with the value button then comment this line
       }
    }
}




