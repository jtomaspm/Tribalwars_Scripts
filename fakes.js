// ==UserScript==
// @name Fakes Special
// @include http*
// @grant none
// ==/UserScript==
var tempo = 100;
var x = 0;

javascript: var FakesPorAldeia = 1;
var sp = 0;
var sw = 0;
var ax = 0;
var scout = 0;
var lc = 5;
var hv = 0;
var cat = 0;
var ra = 0;
var coords = '520|463 499|473 498|467 508|460 496|461 504|473 511|474 503|473 500|470 500|474 508|477 518|456 510|466 503|471 503|463 499|475 500|468 505|470 504|467 508|463 519|460 505|476 500|473 501|472 507|474 510|465 511|470 508|459 496|469 504|468 509|458 503|462 513|474 501|470 506|466 522|457 502|473 505|469 508|469 508|461 523|460 440|449 501|473 495|472 514|475 508|462 507|470 515|468 504|469 506|474 507|465 506|470 499|470 501|471 518|462 503|469 506|468 521|467 509|476';
var doc = document;
var url = document.URL;
var cookieName = "farmeruk";
var cookieNameTent = "tentcookie";
var maxTentativas = 15;
var data;
var h2 = document.getElementsByTagName('h2');
var Praca = false;
var EnviarAtaque = false;
for (i = 0; i < h2.length; i++) {
    if (h2[i].innerHTML == "Praça de Reuniões (nível 1)") {
        Praca = true;
    } else if (h2[i].innerHTML.search("Confirmar ataque a") != -1) {
        EnviarAtaque = true;
    }
}
if (Praca == EnviarAtaque) var tentCookie = document.cookie.match('(^|;) ?' + cookieNameTent + '=([^;]*)(;|$)');
if (tentCookie != null) {
    var numTentativas = parseInt(tentCookie[2]);
} else {
    data = new Date(2019, 11, 11);
    document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
    var numTentativas = 0;
}
if (Praca) {
    if (document.getElementsByClassName("error_box")[0] != undefined) {
        var erroFaltaUnid = document.getElementsByClassName("error_box");
        for (i = 0; i < erroFaltaUnid.length && !found; i++) {
            if (erroFaltaUnid[i].innerHTML.search("Não existem unidades suficientes") != -1) {
                document.getElementById("village_switch_right").click();
                throw ''
            }else if (erroFaltaUnid[i].innerHTML.search("Até 16.5. 18:41, apenas pode atacar e ser atacado se a diferença entre os seus pontos e os do inimigo for no máximo 20 : 1.") != -1){
                 index = index + 1;
                 cookie_date = new Date(2019, 11, 11);
                 document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                 window.location.reload();
            }else if (document.getElementsByClassName("error_box")[0].innerText.equals("Este jogador foi bloqueado e, por isso, não pode ser atacado nem apoiado.")){
                 index = index + 1;
                 cookie_date = new Date(2019, 11, 11);
                 document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                 window.location.reload();
            }
        }
    }
    if (doc.forms[0].x.value != "") {
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie != null) {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length) {
            index = 0;
        }
        index = index + 1;
        cookie_date = new Date(2019, 11, 11);
        document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
        var link = document.getElementsByClassName("quickbar_link");
        for (i = 0; i < link.length; i++) {
            if (link[i].href.search(/screen=place/) != -1) {
                window.location.href = link[i].href;
            }
        }
    } else {
        if (window.frames.length > 0) {
            doc = window.main.document;
        }
        url = document.URL;
        coords = coords.split(" ");
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie != null) {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length) {
            index = 0;
        }
        if (document.getElementsByClassName("command-list-count")[0] != undefined) {
            var numAtaques = document.getElementsByClassName("command-list-count")[0].innerHTML;
        } else {
            var numAtaques = 0;
        }
        if (numAtaques < FakesPorAldeia) {
            if (numTentativas <= maxTentativas) {
                coords = coords[index];
                coords = coords.split("|");
                index = index + 1;
                cookie_date = new Date(2019, 11, 11);
                document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                doc.forms[0].x.value = coords[0];
                doc.forms[0].y.value = coords[1];
                doc.forms[0].spy.value = scout;
                doc.forms[0].spear.value = sp;
                doc.forms[0].sword.value = sw;
                doc.forms[0].axe.value = ax;
                doc.forms[0].spy.value = scout;
                doc.forms[0].light.value = lc;
                doc.forms[0].heavy.value = hv;
                doc.forms[0].ram.value = ra;
                doc.forms[0].catapult.value = cat;
                document.forms[0].attack.click();
            } else {
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
                document.getElementById("village_switch_right").click();
            }
        } else {
            document.getElementById("village_switch_right").click();
        }
    }
} else if (EnviarAtaque) {
    var BNCheck = document.getElementsByClassName("error");
    var found = false;
    for (i = 0; i < BNCheck.length && !found; i++) {
        if (BNCheck[i].innerHTML == "Bónus noturno ativo!") {
            found = true;
        }
    }
    if (found) {
        var link = document.getElementsByClassName("quickbar_link");
        for (i = 0; i < link.length; i++) {
            if (link[i].href.search(/screen=place/) != -1) {
                numTentativas = numTentativas + 1;
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=" + numTentativas + ";expires=" + data.toGMTString();
                window.location.href = link[i].href;
            }
        }
    } else {
        document.forms[0].troop_confirm_go.click();
    }
};
console.log("xxx");


function altAldeia() {
    $('.arrowRight').click();
       $('.groupRight').click();
       $('div.arrow.arrowRight').click();
       $('div.arrow.groupRight').click();

if($('.groupRight').length<1 && $('.arrowRight').length<1)
    window.location.reload();
}