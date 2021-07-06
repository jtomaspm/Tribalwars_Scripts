// ==UserScript==
// @name      Contar Ataques Tribo
// @include     https://*pt72*mode=members_defense*
// @author       PopAndBoom
// ==/UserScript==




var newWin = open('','windowName');
var URLs = [];
var lastRequestTime = 0;
var minWaitTime = 200; // ms between requests
var nome = "";
var fulls = 0;
var coords;
var attackCount;
var countL = 0;
var countE = 0;
var countA = 0;
//var maxDistanceToFront = 0
newWin.document.write('Atacks recebidos<br>')
lancasImage= ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_spear.png" alt="lancas"> '
espadasImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_sword.png" alt="espadas"> '
arcosImage = ' <img src="https://dspt.innogamescdn.com/asset/4b16a6f/graphic/unit/unit_archer.png" alt="arcos"> '


var input = $('select.input-nicer')[0]
for(var j = 1;j < input.length-1 ;j++){
    player = input.children[j];
URLs.push("/game.php?screen=ally&mode=members_defense&player_id="+$('select.input-nicer')[0].children[j].value)}
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

    try{
            var rows = $(data).find('table.vis.w100')[0].rows;
     input = $(data).find('select.input-nicer')[0]
    //var id = /id=(\d+)/.exec($(location).attr('href'))[1];

    newWin.document.write('Aldeias de '+$('select.input-nicer')[0][i+1].text + 'a levar ataques<br>')
    attackCount=0
    for(var l = 0; l<parseInt(rows.length/2); l++){
    var aldeia = rows[l*2+1];
    var lancas = aldeia.cells[2];
    var espadas = aldeia.cells[3];
    var arcos = aldeia.cells[5];
    nome = aldeia.cells[0].innerText.trim();
    coords = nome.substring(nome.length-5,nome.length-12).split("|");
    var attacks = parseInt(aldeia.cells[15].innerText);

    if(attacks>0){
        attackCount +=attacks;
        newWin.document.write('Aldeia '+String(coords[0])+"|"+String(coords[1])+" a receber "+aldeia.cells[15].innerText+" atacks. Tem : "+String(parseInt(lancas.innerHTML))+lancasImage+String(parseInt(espadas.innerHTML))+espadasImage+String(parseInt(arcos.innerHTML))+arcosImage+'<br>')
        countL += parseInt(lancas.innerHTML);
        countE += parseInt(espadas.innerHTML);
        countA += parseInt(arcos.innerHTML);
    }

}
        }catch(e){
            newWin.document.write($('select.input-nicer')[0][i+1].text + 'NAO PARTILHA <br>')}
            newWin.document.write('Jogador '+$('select.input-nicer')[0][i+1].text +' a receber ' + String(attackCount) + ' ataques <br><br>');
});

function getName(id,group){
    for(var j = 0;j<group.length;j++){
        if(group[j].value===id)
            return group[j].innerText
    }
    return "";
}




