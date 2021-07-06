// ==UserScript==
// @name      recrutar by pop
// @include     https://*pt79*&screen=train*
// ==/UserScript==

//-----------------------------------------------------GUIA----------------------------------------------------------------//
// ataque: (vikings, cavalaria leve, arietes)
// defesa: (lanceiros, espadachins) (consoante tem mais madeira ou ferro)
// lancas: (lanceiros) (buscas / inicio de mundo)
//-----------------------------------------------------GUIA----------------------------------------------------------------//

var currentCoord = TribalWars.getGameData().village.coord;
var ataque = "480|510 479|503 482|508 485|494 479|502 481|494 483|513 477|506 481|502 486|506 484|500 477|503 486|508 479|501 485|513 493|494 482|503 477|504 490|494 488|492 488|500";
var defesa = "";
var lancas = "485|504 483|493 479|504 483|512 477|501 480|500 478|504 478|503 485|496 481|497 482|497 483|503 484|504 487|499";

// Quantidades que mete a recrutar em cada edificio
//Quartel
var quantidade_infantaria = 2;
//Estabulo
var quantidade_cavalaria = 2;
//Oficina
var quantidade_oficina = 1;

var atk_arr = ataque.split(" ");
var def_arr = defesa.split(" ");
var lan_arr = lancas.split(" ");

var quartel = document.getElementById("trainqueue_wrap_barracks") == null || document.getElementById("trainqueue_wrap_barracks").getElementsByClassName("vis")[0].rows.length < 3;
var estabulo = document.getElementById("trainqueue_wrap_stable") == null || document.getElementById("trainqueue_wrap_stable").getElementsByClassName("vis")[0].rows.length < 3;
var oficina = document.getElementById("trainqueue_wrap_garage") == null || document.getElementById("trainqueue_wrap_garage").getElementsByClassName("vis")[0].rows.length < 3;

var lanceiro_custo = [50, 30, 10];
var espadachim_custo = [30, 30, 70];
var viking_custo = [60, 30, 40];
var leve_custo = [120, 100, 250];
var ariete_custo = [300, 200, 200];

var lanceiro_row = null;
var espadachim_row = null;
var viking_row = null;
var leve_row = null;
var ariete_row = null;

var madeira = parseInt(document.getElementById("wood").innerText);
var argila = parseInt(document.getElementById("stone").innerText);
var ferro = parseInt(document.getElementById("iron").innerText);

if(document.getElementById("train_form") == null){
   altAldeia();
}else{
    recrutador();
}


function recrutador(){
    fillUnitRows();
    if(atk_arr.includes(currentCoord)){
        recAtk();
    }else if(def_arr.includes(currentCoord)){
        recDef();
    }else if(lan_arr.includes(currentCoord)){
        recLan();
    }

    altAldeia();
}


function fillUnitRows(){
    var tabela_recrutamento = document.getElementById("train_form").children[0].childNodes[1].children;

    //obter unidades pesquisadas
    for (var i = 0; i < tabela_recrutamento.length; i++) {
        if( tabela_recrutamento[i].className == "row_a" || tabela_recrutamento[i].className == "row_b" ){
            switch(tabela_recrutamento[i].innerText.split(" ")[1].split("\t")[0]) {
                case "Lanceiro":
                    lanceiro_row = tabela_recrutamento[i];
                    break;
                case "Espadachim":
                    espadachim_row = tabela_recrutamento[i];
                    break;
                case "Viking":
                    viking_row = tabela_recrutamento[i];
                    break;
                case "Cavalaria":
                    if(tabela_recrutamento[i].innerText.split(" ")[2].split("\t")[0] == "leve"){
                        leve_row = tabela_recrutamento[i];
                    }
                    break;
                case "Aríete":
                    ariete_row = tabela_recrutamento[i];
                    break;
            }
        }
    }
}


function recAtk(){
    var rec = false;
    if(quartel){
        if(viking_row != null && calculateRes(viking_custo, quantidade_infantaria)){
            setRowVal(viking_row, quantidade_infantaria);
            rec = true;
        }
    }
    if(estabulo){
        if(leve_row != null && calculateRes(leve_custo, quantidade_cavalaria)){
            setRowVal(leve_row, quantidade_cavalaria);
            rec = true;
        }
    }
    if(oficina){
        if(ariete_row != null && calculateRes(ariete_custo, quantidade_oficina)){
            setRowVal(ariete_row, quantidade_oficina);
            rec = true;
        }
    }
    if(rec){
        clickRecruit();
    }
}

function recDef(){
    if(quartel){
        if(ferro < madeira){
            if(lanceiro_row != null && calculateRes(lanceiro_custo, quantidade_infantaria)){
                setRowVal(lanceiro_row, quantidade_infantaria);
                clickRecruit();
            }
        }else{
           if(espadachim_row != null && calculateRes(espadachim_custo, quantidade_infantaria)){
               setRowVal(espadachim_row, quantidade_infantaria);
               clickRecruit();
           }
        }
    }
}

function recLan(){
    if(quartel){
        if(lanceiro_row != null && calculateRes(lanceiro_custo, quantidade_infantaria)){
           setRowVal(lanceiro_row, quantidade_infantaria);
           clickRecruit();
        }
    }
}

function setRowVal(unit_row, val){
    unit_row.cells[3].children[0].children[0].value = val;
}

function clickRecruit(){
    $('input.btn.btn-recruit').click();
}

function calculateRes(unidade_custo, ammount){
    if (madeira >= unidade_custo[0]*ammount && argila >= unidade_custo[1]*ammount && ferro >= unidade_custo[2]*ammount) {
        madeira -= unidade_custo[0]*ammount;
        argila -= unidade_custo[1]*ammount;
        ferro -= unidade_custo[2]*ammount;
        return true;
    }else{
        return false;
    }
}

function altAldeia(delay=10000){
    setTimeout(function() {
        $('.arrowRight').click();
        $('.groupRight').click();
    }, delay);
}

