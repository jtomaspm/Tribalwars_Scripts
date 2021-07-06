// ==UserScript==
// @name      Contar Defesa
// @include     https://*pt72*mode=members_defense*
// @author       PopAndBoom
// ==/UserScript==

var fulls = 0;
var frontLines = [[439,459],[501,474],[554,522],[620,511],[660,528],[685,501]]
var countL = 0;
var countE = 0;
var countA = 0;
//var horasMax = 16;
//var maxDistanceToFront = horasMax*60/22;
var maxDistanceToFront = 15
var DefesaGeral = 500*15+500*50+500*50;
var DefesaCaval = 500*45+500*15+500*40;
var newWin = open('','windowName');
newWin.document.write('Packs em casa a ' + maxDistanceToFront + ' horas do front<br>')
lancasImage= ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_spear.png" alt="lancas"> '
espadasImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_sword.png" alt="espadas"> '
arcosImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_archer.png" alt="arcos"> '

try{

var rows = document.getElementsByClassName('vis w100')[0].rows;
test = document.getElementsByClassName("input-nicer")[0]
newWin.document.write(test.children[test.selectedIndex].text+'<br>')
j = test.selectedIndex;

for(var i = 0; i<parseInt(rows.length/2); i++){
    var aldeia = rows[i*2+1];
    var lancas = aldeia.cells[2];
    var espadas = aldeia.cells[3];
    var arcos = aldeia.cells[5];
    nome = aldeia.cells[0].innerText
    coords = nome.substring(nome.length-5,nome.length-12).split("|")
    minDistance = getMinDistance(coords,frontLines)
    if ((minDistance > maxDistanceToFront) & (Math.max(parseInt(lancas.innerHTML),parseInt(espadas.innerHTML),parseInt(arcos.innerHTML)) >10000)){
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
document.getElementsByTagName('h2')[0].innerHTML = ": " + packsEmCasa + " packs em casa";
newWin.document.write('<br><br>Packs em casa: '+packsEmCasa+'<br>----------------------------------------------------------------------------------------------------------------------------------------------------<br>')
URL = "/game.php?screen=ally&mode=members_defense&player_id="+test.children[j+1].value
if(j<test.length-1)
location.href=URL;}catch(e){
	var button = document.createElement("button");
button.innerHTML = "Confirmar";



var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Horas");
  document.getElementById('header_info').append(x);
document.getElementById('header_info').append(button);

button.addEventListener ("click", function() {
  val = x.value;
    test = document.getElementsByClassName("input-nicer")[0]

    document.getElementsByTagName('h2')[0].innerHTML = val;
    URL = "/game.php?screen=ally&mode=members_defense&player_id="+test.children[1].value

location.href=URL;
});
}
//document.getElementsByTagName('h2')[0].innerHTML = ": " + countL + " lanças";
//document.getElementsByTagName('h2')[0].innerHTML += "\n: " + countE + " espadas";
//document.getElementsByTagName('h2')[0].innerHTML += "\n: " + countA + " arcos";
function getMinDistance(point,frontLines){
    var distanceMin = 9999;
    for( var i = 0;i < frontLines.length-1;i++){
        var distance = pDistance(point[0],point[1],frontLines[i][0],frontLines[i][1],frontLines[i+1][0],frontLines[i+1][1])
        if(distance<distanceMin){
            distanceMin=distance;}
    }
return distanceMin
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
