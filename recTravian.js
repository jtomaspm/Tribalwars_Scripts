// ==UserScript==
// @name         recrutar wtf
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.lusobrasileiro.travian.com/*id=3*
// @grant        none
// ==/UserScript==

var aldeiasLink = [];
var edificioLink = [];
var edL = document.getElementsByClassName("titleInHeader")[0].innerText.substring(0,1);

var box = document.getElementsByClassName("details");

for(var i = 0; i < 3; i++){
    aldeiasLink[i] = document.getElementsByClassName("content")[5].getElementsByTagName("a")[i];
}



for(var i = 0; i < document.getElementsByClassName("buttonsWrapper")[2].getElementsByTagName("a").length; i++){
    edificioLink[i] = document.getElementsByClassName("buttonsWrapper")[2].getElementsByTagName("a")[i+1];
}
if(document.getElementsByClassName("furtherInfo")[2])
var spys = parseInt(document.getElementsByClassName("furtherInfo")[2].innerText.substring(12).slice(0,-1));
var aldeiaAtual = document.getElementsByClassName("villageInput")[0].value.substring(1,2);
var idAldeia = parseInt(localStorage.getItem('ALDEIA_TRAVIAN'));
var idEdificio = parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'));

var salteadores = [
    "A",
    "B"
];

var espiao = [
    "C"
];

var paladino = [
    "B"
];

var ctt = [
    "A"
];

var catas = [
    "A",
    "B"
];

if(salteadores.includes(aldeiaAtual) && edL==("Q")) {
   document.getElementsByClassName("text")[0].value = 10;
    if(box[0].getElementsByClassName("errorMessage")[0])
        altAldeia();
console.log("Aldeia: " + aldeiaAtual + " faz salteadores");
}

if(espiao.includes(aldeiaAtual) && (spys < 1000) && edL==("Q")) {
   document.getElementsByClassName("text")[2].value = 3;
    if(box[2].getElementsByClassName("errorMessage")[0])
        altAldeia();
console.log("Aldeia: " + aldeiaAtual + " faz espiao");
}

if(paladino.includes(aldeiaAtual) && edL==("C")) {
   document.getElementsByClassName("text")[1].value = 3;
    if(box[1].getElementsByClassName("errorMessage")[0])
        altAldeia();
}

if(ctt.includes(aldeiaAtual) && edL==("C")) {
   document.getElementsByClassName("text")[0].value = 3;
    if(box[0].getElementsByClassName("errorMessage")[0])
        altAldeia();
}

if(catas.includes(aldeiaAtual) && edL==("O")) {
   document.getElementsByClassName("text")[1].value = 1;
    if(box[1].getElementsByClassName("errorMessage")[0])
        altAldeia();
}

if(!document.getElementsByClassName("dur")[0] && document.getElementsByClassName("textButtonV1 green startTraining")[0]){
    document.getElementsByClassName("textButtonV1 green startTraining")[0].click()
}


altAldeia();


function altAldeia() {
 var delay = 6000;
    setTimeout(function() {

//        if(aldeiaAtual == "C" ){
//            localStorage.setItem('ALDEIA_TRAVIAN', 0);
//            if(idEdificio >= edificioLink.length-1){
//                localStorage.setItem('EDIFICIO_TRAVIAN', 0);
//                edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))].click();
//            }else{
//                localStorage.setItem('EDIFICIO_TRAVIAN', (parseInt(localStorage.getItem('EDIFICIO_TRAVIAN')) + 1));
//                if(edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))])
//                   edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))].click();
//                else if(edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))-1])
//                    edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))-1].click();
//                else
//                    edificioLink[parseInt(localStorage.getItem('EDIFICIO_TRAVIAN'))-2].click();
//            }
//            aldeiasLink[parseInt(localStorage.getItem('ALDEIA_TRAVIAN'))].click();

//        }else{
//            localStorage.setItem('ALDEIA_TRAVIAN', (parseInt(localStorage.getItem('ALDEIA_TRAVIAN')) + 1));
//            aldeiasLink[parseInt(localStorage.getItem('ALDEIA_TRAVIAN'))].click();
//        }

if(aldeiaAtual == "A" && edL == "Q"){
   aldeiasLink[1].click();

   }else if(aldeiaAtual == "B" && edL == "Q"){
   aldeiasLink[2].click();

   }else if(aldeiaAtual == "C" && edL == "Q"){
   aldeiasLink[0].click();

   }else if(aldeiaAtual == "C" && edL == "C"){
   aldeiasLink[0].click();

   }else if(aldeiaAtual == "A" && edL == "C"){
   aldeiasLink[1].click();

   }else if(aldeiaAtual == "B" && edL == "C"){
   edificioLink[2].click();

   }else if(aldeiaAtual == "B" && edL == "O"){
   aldeiasLink[0].click();

   }else{
   edificioLink[0].click();

   }



    }, delay);
}


