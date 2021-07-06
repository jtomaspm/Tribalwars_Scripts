// ==UserScript==
// @name         ataqCount
// @author       mama aqui
// @include      https://*overview_villages&mode=incomings*
// ==/UserScript==


var rows = $('table#incomings_table')[0].rows;
var arr = [];
var arr2 = [];
var newWin = open('','windowName');
var countVill

for(var i = 1; i< rows.length-1;i++){

var obj = {
    player : rows[i].cells[3].innerText,
    village : rows[i].cells[1].innerText};
    arr.push(obj)

}


/*for(var j =0;j<arr.length;j++){
newWin.document.write(arr[j].player+'<br>');
}*/
//let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
var filtered = arr.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);



for(var j =0;j<filtered.length;j++){

    filtered[j].attacks = getNbOccur(filtered[j].player,filtered[j].village,arr);
}

filtered.sort((a,b) => (a.attacks < b.attacks) ? 1 : ((b.attacks < a.attacks) ? -1 : 0));
for(var j =0;j<filtered.length;j++){
    vil = filtered[j].village.substring(filtered[j].village.length-5,filtered[j].village.length-12).split("|");
    newWin.document.write(filtered[j].player+'  ataca '+ vil[0] +"|"+vil[1] + " " + filtered[j].attacks + ' vezes <br>');
}
newWin.document.write('---------------------------------------------------------------------------------------<br>');

function groupBy(xs, f) {
  return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
}

var villageAttacks = groupBy(filtered, (c) => c.village);
for(key in villageAttacks) {
    if(villageAttacks.hasOwnProperty(key)) {
        countVill = 0;
        var playersAttacks = "";
        var value = villageAttacks[key];
       for(var l =0;l<value.length;l++){
           countVill += value[l].attacks
           playersAttacks += value[l].player + " com " + value[l].attacks + " ataques <br>";
           //newWin.document.write(value[l].village + String(countVill) + " attacks <br>");
       }
        vil = value[0].village.substring(value[0].village.length-5,value[0].village.length-12).split("|");
        strAtt = vil[0] +"|"+vil[1]+" a receber " + String(countVill) + " attacks <br>"+playersAttacks+"<br><br>";
        var obj2 = {
            attacks : strAtt,
            count : countVill};
        arr2.push(obj2)

}
    }

    arr2.sort((a,b) => (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0));
for(var k=0;k<arr2.length;k++)
    newWin.document.write(arr2[k].attacks);



for(var l =0;l<villageAttacks.length;l++){
    vil = villageAttacks[l].village.substring(villageAttacks[l].village.length-5,villageAttacks[l].village.length-12).split("|");
    for(var j = 0;j<villageAttacks[l].length;j++){
        newWin.document.write(villageAttacks[l][j].player+'  ataca '+ vil[0] +"|"+vil[1] + " " + villageAttacks[l][j].attacks + ' vezes <br>');}
    newWin.document.write('---------------------------------------------------------------------------------------');
}



function getNbOccur(player,village, arr) {
  var occurs = 0;

  for (var i=0; i<arr.length; i++) {
    if ( 'player' in arr[i] && arr[i].player === player && 'village' in arr[i] && arr[i].village === village ) occurs++;
  }

  return occurs;
}

