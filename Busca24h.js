// ==UserScript==
// @name         Busca 24h
// @version      0.2
// @description
// @author       PopAndBoom
// @include https://pt*.tribalwars.com.pt/*mode=scavenge*
// @exclude https://pt*.tribalwars.com.pt/*mode=scavenge_mass
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// ==/UserScript==
var tempo = 15000;//25000
var usavik = false; //usar vikings
var usaleve = false; //usar leves
var ignoraCoords = [""];//["123|123","123|123","123|123"]  ----- > aldeias que ignora
var saveAtk = ["485|494","493|494","488|492"];

(function() {
    'use strict';
    var turbinatorTW = TribalWars.getGameData();
    var tag = turbinatorTW.world + '_' + turbinatorTW.player.name + '_'+turbinatorTW.screen+ '_'+turbinatorTW.mode;
    var tIni = Date.now();
    var nLoop = 5;
	unsafeWindow.window.name = tag;

    if (unsafeWindow.window.name === tag) {
        iniciar();
        loop(nLoop);
        recarregar(60);
    }
    function iniciar(){
        var currentCoord = TribalWars.getGameData().village.coord;
        if(saveAtk.includes(currentCoord)){
            usavik = false;
            usaleve = false;
        }
        if(ignoraCoords.includes(currentCoord))
            setInterval(altAldeia, 5000);
        else
            logica();
    }
    function aleatorio(menor, maior){ var intervalo = Math.round(maior - menor); return Math.floor(Math.random() * intervalo) + menor + Timing.offset_to_server; }
    //Loop no inicar a cada X segundos. nLoop = 0 para o loop
    function loop(segundos){ var timer = setInterval(function () { if (nLoop === 0){clearInterval(timer);} else {setTimeout(function () { iniciar(); }, aleatorio(segundos*1000*0.01, segundos*1000*0.10));} }, segundos*1000); }
    //Recarrega a pagina a cada X minutos
    function recarregar(minutos){ setInterval(function () { setTimeout(function () { window.location.reload(); }, aleatorio(minutos*20000*0.01, minutos*20000*0.10)); }, minutos*20000); }
    //Buscar e Validar Objeto
    function buscarObjeto(sObj){var objeto = document.querySelectorAll(sObj); if (objeto!==undefined && objeto[0]!==undefined){return objeto;} else {return undefined;}}

    function retornarInteiro(txt,divisor){ var retInt = 0; var valor = parseInt(txt.replace('(','').replace(')','')); if (valor > 0 && divisor > 0){ retInt = Math.trunc(valor/divisor); } return retInt;  }

    function selecionarTropas(divisor){
        if (divisor > 0)
        {
            var nrLanca = $("a.units-entry-all[data-unit='spear']")[0];
            var nrEspada = $("a.units-entry-all[data-unit='sword']")[0];
            var soma = retornarInteiro(nrLanca.innerText,divisor) + retornarInteiro(nrEspada.innerText,divisor);
            if(usavik == true)
            {
                var nrMachado = $("a.units-entry-all[data-unit='axe']")[0];
                soma += retornarInteiro(nrMachado.innerText,divisor);
            }
            var nrArco = $("a.units-entry-all[data-unit='archer']")[0];
            if (nrArco != undefined)
            {
                soma += retornarInteiro(nrArco.innerText,divisor);
            }

            var nrPesada = $("a.units-entry-all[data-unit='heavy']")[0];
            soma += retornarInteiro(nrPesada.innerText,divisor)*6;
            if(usaleve == true){
                var nrLeve = $("a.units-entry-all[data-unit='light']")[0];
                soma += retornarInteiro(nrLeve.innerText,divisor)*4;
            }
            if (soma < 10)
            {
                setInterval(altAldeia, 5000);
            }


            if (divisor == 1){
                nrLanca.click();
                nrPesada.click();
                nrEspada.click();
                if(usavik == true){
                    nrMachado.click();
                }
                if(usaleve == true){
                    nrLeve.click();
                }
                if (nrArco != undefined) {
                    nrArco.click();
                }
            }
            else{
                if(usaleve == true){
                var leve = document.getElementsByName("light")[0];
                leve.value = retornarInteiro($("a.units-entry-all[data-unit='light']")[0].innerText,divisor);
                leve.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                 }
                var pesada = document.getElementsByName("heavy")[0];
                pesada.value = retornarInteiro($("a.units-entry-all[data-unit='heavy']")[0].innerText,divisor);
                pesada.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                var lanca = document.getElementsByName("spear")[0];
                lanca.value = retornarInteiro($("a.units-entry-all[data-unit='spear']")[0].innerText,divisor);
                lanca.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                var espada = document.getElementsByName("sword")[0];
                espada.value = retornarInteiro($("a.units-entry-all[data-unit='sword']")[0].innerText,divisor);
                espada.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                if(usavik == true){
                    var machado = document.getElementsByName("axe")[0];
                    machado.value = retornarInteiro($("a.units-entry-all[data-unit='axe']")[0].innerText,divisor);
                    machado.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                }
                if (nrArco != undefined) {
	                var arco = document.getElementsByName("archer")[0];
        	        arco.value = retornarInteiro($("a.units-entry-all[data-unit='archer']")[0].innerText,divisor);
                	arco.dispatchEvent(new KeyboardEvent('keyup',{'key':'0'}));
                }
            }
        }
    }
    function timeOver(){
        var tempo = document.getElementsByClassName('return-countdown');
        var lRecarregar = false;
        for (var i = 0; i < 4; i++) { if (tempo[i]!==undefined && parseInt(tempo[i].innerText.split(":")[1])<1){lRecarregar = true;} }
        if (lRecarregar){
            recarregar(2);
        }
    }

    function btnsDisponiveis(objeto){
        var objRet = {}; var cont = 0;
        for (var i = 0; i < 4; i++) { if (objeto[i]!==undefined){cont = cont + 1; objRet.btn = objeto[i];} }
        objRet.cont = cont;
        return objRet;
    }

    function logica(){
        var btns = buscarObjeto("a.btn.btn-default.free_send_button:not(.btn-disabled)");
        if (btns!==undefined){
            var disp = btnsDisponiveis(btns);
            if (disp.cont > 0 ){
                selecionarTropas(disp.cont);
                setTimeout(function () { disp.btn.click(); }, aleatorio(700, 1500));
            }
        }
        timeOver();
    }
    var altAldTempo = aleatorio(tempo - tempo/3,tempo+tempo/3);
    function Aleatorio(superior,inferior) {
        numPosibilidades = superior - inferior;
        aleat = Math.random() * numPosibilidades;
        return Math.round(parseInt(inferior) + aleat);
    }


    function altAldeia()
    {
        $('.arrowRight').click();
        $('.groupRight').click();

    }

setInterval(altAldeia, altAldTempo);

})();