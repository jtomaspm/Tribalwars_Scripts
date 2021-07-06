// ==UserScript==
// @name         farm broken <3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        *pt76.tribalwars.com.pt/*&screen=am_farm*
// @grant        none
// ==/UserScript==

var save = [];
var aldeia ="";
var NRcls = parseInt(document.getElementById("light").innerText);
try{
    aldeia = document.getElementById("menu_row2").childNodes[7].firstChild.innerText.substring(1,8);

}catch(e){
    aldeia = document.getElementById("menu_row2").childNodes[3].firstChild.innerText.substring(1,8);
}

if ((save.includes(aldeia) || NRcls < 1)){
 altAldeia();
}

var maxDistance = 3000;
var lastAtk = 1200000;
var minPontos = 300;
var counter = 0;
var id = new Array();
var x = new Array();
var y = new Array();
var pontos = new Array();
var coordsID = new Map();
var IDs = new Map();
var request = new XMLHttpRequest();
request.open('GET', 'https://pt76.tribalwars.com.pt/map/village.txt', true);
request.send(null);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader('Content-Type');
        if (type.indexOf("text") !== 1) {
            var a = request.responseText.toString();
            var text = a;
            var vilageTxt = text.split("\n");

            for(var i = 0; i < vilageTxt.length-1; i++){
                id[i] = vilageTxt[i].split(",")[0];
                x[i] = vilageTxt[i].split(",")[2];
                y[i] = vilageTxt[i].split(",")[3];
                pontos[i] = vilageTxt[i].split(",")[5];
            }
        }
    }
}
//GENERATE COORDS > PONTOS MAP
var delay = 1700;
setTimeout(function() {
    for(var z = 0; z < id.length; z++){
        var s = x[z].toString() + "|" + y[z].toString();
        coordsID.set(s, pontos[z].toString());
        IDs.set(s, id[z].toString());
    }

    console.log(coordsID.get("462|420"));
}, delay);

var delay = 2700;
setTimeout(function() {
var aldeia ="";
var pages = document.getElementsByClassName("paged-nav-item");

try{
    aldeia = document.getElementById("menu_row2").childNodes[7].firstChild.innerText.substring(1,8);

}catch(e){
    aldeia = document.getElementById("menu_row2").childNodes[3].firstChild.innerText.substring(1,8);
}

var URLs = [];
 var id = IDs.get(aldeia);


for(var i = 0; i < pages.length/2; i++){
            URLs.push("https://pt76.tribalwars.com.pt/game.php?village=" + id + "&screen=am_farm&order=distance&dir=asc&Farm_page=" + i);
}

console.log(URLs);
$.getAll = function (
urls, // array of URLs
 onLoad, // called when any URL is loaded, params (index, data)
 onDone, // called when all URLs successfully loaded, no params
 onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 400*20; // ms between requests
    loadNext();
    function loadNext() {
        if (numDone == urls.length) {
            onDone();
            return;
        }

        let now = Date.now();
        let timeElapsed = now - lastRequestTime;
        if (timeElapsed < minWaitTime) {
            let timeRemaining = minWaitTime - timeElapsed;
            setTimeout(loadNext, timeRemaining);
            return;
        }
        $("#progress").css("width", `${(numDone + 1) / urls.length * 100}%`);
        lastRequestTime = now;
        $.get(urls[numDone])
            .done((data) => {
            try {
                onLoad(numDone, data);
                ++numDone;
                loadNext();
            } catch (e) {
                console.log(e);
                onError(e);
            }
        })
            .fail((xhr) => {
            onError(xhr);
        })
    }
};

$.getAll(URLs,
         (i, data) => {
    var initT = 1500;
    var increment = 400;
    rows = $(data).find("table#plunder_list")[0].rows;
    console.log("Page: " + i);
    if(rows[2])
        setTimeout(function() {  sendAtk(rows[2]);  }, initT);
    initT += increment;
    if(rows[3])
        setTimeout(function() {  sendAtk(rows[3]); }, initT);
    initT += increment;
    if(rows[4])
        setTimeout(function() {  sendAtk(rows[4]);  }, initT);
    initT += increment;
    if(rows[5])
        setTimeout(function() {  sendAtk(rows[5]); }, initT);
    initT += increment;
    if(rows[6])
        setTimeout(function() {  sendAtk(rows[6]); }, initT);
    initT += increment;
    if(rows[7])
        setTimeout(function() {  sendAtk(rows[7]); }, initT);
    initT += increment;
    if(rows[8])
        setTimeout(function() {  sendAtk(rows[8]);  }, initT);
    initT += increment;
    if(rows[9])
        setTimeout(function() {  sendAtk(rows[9]); }, initT);
    initT += increment;
    if(rows[10])
        setTimeout(function() {  sendAtk(rows[10]);  }, initT);
    initT += increment;
    if(rows[11])
        setTimeout(function() {  sendAtk(rows[11]);  }, initT);
    initT += increment;
    if(rows[12])
        setTimeout(function() {  sendAtk(rows[12]);}, initT);
    initT += increment;
    if(rows[13])
        setTimeout(function() {  sendAtk(rows[13]);}, initT);
    initT += increment;
    if(rows[14])
        setTimeout(function() {  sendAtk(rows[14]); }, initT);
    initT += increment;
    if(rows[15])
        setTimeout(function() {  sendAtk(rows[15]);}, initT);
    initT += increment;
    if(rows[16])
        setTimeout(function() {  sendAtk(rows[16]);}, initT);
    initT += increment;
    if(rows[17])
        setTimeout(function() {  sendAtk(rows[17]);}, initT);


    function sendAtk(k) {
        //console.log(k)
        var cls = parseInt(document.getElementById("light").textContent);
        var a = parseInt(document.getElementsByName("light")[0].value);
        var b = parseInt(document.getElementsByName("light")[1].value);
        var distance = parseInt(k.cells[7].textContent);
        if (a > cls || b > cls || distance >= maxDistance) {
            altAldeia();
        }else{
            var c = k.cells[3].textContent.match(/\d\d\d\|\d\d\d/).toString();
            // console.log(c)
            console.log(coordsID.get(c));
            if(!(localStorage.getItem(c) === null)){
                var tSent = localStorage.getItem(c);
                console.log(parseFloat(((Date.now()-parseFloat(tSent))/100)-1800) + "s  --> " + c + " Devia mandar? " + (parseFloat(Date.now()-parseFloat(tSent)) > lastAtk) + "   Distancia : " +distance);
                if(Date.now()-parseFloat(tSent) > lastAtk){
                    //if(1==1){
                    //sendatk
                    if(parseInt(coordsID.get(c)) < minPontos){
                        console.log("menos");
                        k.cells[8].children[0].click();
                        counter++;
                    }else{
                        console.log("mais");
                        k.cells[9].children[0].click();
                        counter++;
                    }
                    localStorage.setItem(c, Date.now());

                }
            }else{

                //sendatk
                if(parseInt(coordsID.get(c)) < minPontos){
                    k.cells[8].children[0].click();
                    counter++;
                }else{
                    k.cells[9].children[0].click();
                    counter++;
                }
                localStorage.setItem(c, Date.now());

            }
        }
        if (counter >= 30){
            altAldeia();
        }
    }




},function(){console.log("done"); altAldeia();},function(){console.log("error"); altAldeia();});
}, delay);


function altAldeia() {
 var delay = 10000;
    setTimeout(function() {
        altAldeiazzz();

    }, delay);
}

function altAldeiazzz() {
    $('.arrowRight').click();
       $('.groupRight').click();
       $('div.arrow.arrowRight').click();
       $('div.arrow.groupRight').click();

if($('.arrowRight').length<1)
    window.location.reload();
}
