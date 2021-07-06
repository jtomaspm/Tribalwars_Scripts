// ==UserScript==
// @name      Contar Defesa TOP
// @include     https://*pt72*mode=members_defense*
// @author       PopAndBoom
// ==/UserScript==




var minTroop = 500; // tropas minimas na aldeia de uma das unidades lentas
var blue = true; // Acima da linha de front = true, abaixo = false
var frontLines = [[439,459],[501,474],[554,522],[620,511],[660,528],[685,501]]; // pontos que definem a linha de front
var horasMax = 24; //Minimo numero de horas da linha da front
// MUDAR ESTAS VARIAVEIS CONSOANTE QUEIRAS


var newWin = open('','windowName');
var URLs = [];
var lastRequestTime = 0;
var minWaitTime = 200; // ms between requests
var nome = "";
var fulls = 0;
var coords;

var countL = 0;
var countE = 0;
var countA = 0;
var totalTroop = 0;
var maxDistanceToFront = horasMax*60/22;
//var maxDistanceToFront = 0
var DefesaGeral = 500*15+500*50+500*50;
var DefesaCaval = 500*45+500*15+500*40;
var newWin = open('','windowName');
newWin.document.write('Packs em casa a ' + horasMax + ' horas do front<br>')
lancasImage= ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_spear.png" alt="lancas"> '
espadasImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_sword.png" alt="espadas"> '
arcosImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_archer.png" alt="arcos"> '


var input = $('select.input-nicer')[0]
for(var j = 1;j < input.length-1 ;j++){
    player = input.children[j];
    if(!player.disabled){
        console.log(j);
URLs.push("/game.php?screen=ally&mode=members_defense&player_id="+$('select.input-nicer')[0].children[j].value)}}
$.getAll = function (
    urls, // array of URLs
    onLoad, // called when any URL is loaded, params (index, data)
    onDone, // called when all URLs successfully loaded, no params
    onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 200; // ms between requests
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
            var rows = $(data).find('table.vis.w100')[0].rows;
     input = $(data).find('select.input-nicer')[0]
    //var id = /id=(\d+)/.exec($(location).attr('href'))[1];

    newWin.document.write(i+'<br>')
    countL = 0;
    countE = 0;
    countA = 0;
    for(var l = 0; l<parseInt(rows.length/2); l++){
    var aldeia = rows[l*2+1];
    var lancas = aldeia.cells[2];
    var espadas = aldeia.cells[3];
    var arcos = aldeia.cells[5];
    nome = aldeia.cells[0].innerText.trim();
    coords = nome.substring(nome.length-5,nome.length-12).split("|");

    var minDistance = getMinDistance(coords,frontLines);
    //if ((minDistance[0] > maxDistanceToFront) & minDistance[1]  & (Math.max(parseInt(lancas.innerHTML),parseInt(espadas.innerHTML),parseInt(arcos.innerHTML)) >minTroop)){
    //newWin.document.write('<br>'+String(!minDistance[1]));
    if (!minDistance[1]==blue & (minDistance[0] > maxDistanceToFront) & (Math.max(parseInt(lancas.innerHTML),parseInt(espadas.innerHTML),parseInt(arcos.innerHTML)) > minTroop)){
        newWin.document.write('<br>'+String(coords[0])+"|"+String(coords[1])+" : "+String(parseInt(lancas.innerHTML))+lancasImage+String(parseInt(espadas.innerHTML))+espadasImage+String(parseInt(arcos.innerHTML))+arcosImage)
        countL += parseInt(lancas.innerHTML);
        countE += parseInt(espadas.innerHTML);
        countA += parseInt(arcos.innerHTML);
    }

}
DefesaGeralCasa = countL*15+countE*50+countA*50;
DefesaCavalCasa = countL*45+countE*15+countA*40;
//console.log(DefesaGeralCasa,DefesaCavalCasa)
packsEmCasa = Math.min(parseInt(DefesaGeralCasa/DefesaGeral),parseInt(DefesaCavalCasa/DefesaCaval))
totalTroop += packsEmCasa;
document.getElementsByTagName('h2')[0].innerHTML = ": " + packsEmCasa + " packs em casa";
newWin.document.write('<br><br>Packs em casa: '+packsEmCasa+'<br>----------------------------------------------------------------------------------------------------------------------------------------------------<br>')
    if (i == URLs.length-1)
        newWin.document.write('<br><br>Packs Totais da Tribo: '+totalTroop+'<br>----------------------------------------------------------------------------------------------------------------------------------------------------<br>')
        });

function getName(id,group){
    for(var j = 0;j<group.length;j++){
        if(group[j].value===id)
            return group[j].innerText
    }
    return "";
}


function getMinDistance(point,frontLines){
    var distanceMin = 9999;
    var blue = true;
    for( var k = 0;k < frontLines.length-1;k++){
        var distance = pDistance(point[0],point[1],frontLines[k][0],frontLines[k][1],frontLines[k+1][0],frontLines[k+1][1])
        if(distance<distanceMin){
            distanceMin=distance;
            blue = checkIfIsBelow(point[0],point[1],frontLines[k][0],frontLines[k][1],frontLines[k+1][0],frontLines[k+1][1])}
    }
return [distanceMin,blue]
}
function checkIfIsBelow(x,y,x1,y1,x2,y2){
    m = (y2 - y1) / (x2 - x1);
    b = y1-m*x1;
    return y > m*x + b
}

function pDistance(x, y, x1, y1, x2, y2) {

  var A = x - x1;
  var B = y - y1;
  var C = x2 - x1;
  var D = y2 - y1;

  var dot = A * C + B * D;
  var len_sq = C * C + D * D;
  var param = -1;
  if (len_sq != 0) //in case of 0 length line
      param = dot / len_sq;

  var xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  }
  else if (param > 1) {
    xx = x2;
    yy = y2;
  }
  else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  var dx = x - xx;
  var dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}
