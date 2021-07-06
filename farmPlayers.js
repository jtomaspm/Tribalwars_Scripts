// ==UserScript==
// @name      FarmTOP69
// @include     *pt73.tribalwars.com.pt*screen=place*
// @grant       none
// ==/UserScript==
(function() {
    var tempo = 355;
   var points;
var x = 0;
var light = [1,1,15,15];
var FakesPorAldeia = 1;
var coords = '526|592 529|608 534|597 526|608 523|590 516|598 510|601 534|587 536|585 523|601 528|601 519|615 523|591 531|603 513|610 530|601 531|585 527|591 529|591 529|596 532|591 513|584 512|602 513|605 513|606 521|603 518|602 524|603 528|598 517|591 518|589 518|588 516|583 514|584 519|583 517|581 519|579 520|579 522|579 518|576 525|576 526|575 522|591 524|593 520|596 523|597 516|596 514|596 515|587 516|593 525|592 513|585 529|584 528|586 509|596 508|600 504|595 523|596 524|597 516|595 511|600 510|600';
    // muralha   516|588 512|601 526|599 	515|593 526|590 521|601


    var doc = document;
var url = document.URL;
var cookieName = "farmeruk";
var cookieNameTent = "tentcookie";
var maxTentativas = 1;
var data;
var h2 = document.getElementsByTagName('h2');
var Praca = false;
var EnviarAtaque = false;
    if(window.location.href.includes("mode=scavenge")){
        //do nothing
    }
        else{
for (i = 0; i < h2.length; i++)
{

    if (h2[i].innerHTML == "Praça de Reuniões (nível 1)")
    {
        Praca = true;
    }
    else if(h2[i].innerHTML.search("Confirmar ataque a") != -1)
    {
        EnviarAtaque=true;
    }
}
if (Praca == EnviarAtaque)
{
    alert("Algo correu mal");
}
var tentCookie = document.cookie.match('(^|;) ?' + cookieNameTent + '=([^;]*)(;|$)');
if (tentCookie !== null)
{
    var numTentativas = parseInt(tentCookie[2]);
} else
{
    data = new Date(2020, 11, 11);
    document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
    var numTentativas = 0;
}
if (Praca)
{
    if (document.getElementsByClassName("error_box")[0] !== undefined)
    {
        var erroFaltaUnid = document.getElementsByClassName("error_box");
        for (i = 0; i < erroFaltaUnid.length && !found; i++)
        {
            if (erroFaltaUnid[i].innerHTML.search("Não existem unidades suficientes" || "Até 3.5. 18:26, apenas pode atacar e ser atacado se a diferença entre os seus pontos e os do inimigo for no máximo 20 : 1.") != -1)
            {
                setTimeout(function () { console.log("aahahahah"); }, 5000000);

                    location.reload(1);
            }
        }
    }
    if (doc.forms[0].x.value !== "")
    {
        var index = 0;  farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie !== null)
        {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length)
        {
            index = 0;
        }
        index = index + 1;
        cookie_date = new Date(2020, 11, 11);
        document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
        var link = document.getElementsByClassName("quickbar_link");
        for (i = 0; i < link.length; i++)
        {
            if (link[i].href.search(/screen=place/) != -1)
            {
                window.location.href = link[i].href;
            }
        }
    }
    else
    {
        if (window.frames.length > 0)
        {
            doc = window.main.document;
        }
        url = document.URL;
        coords = coords.split(" ");
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie !== null)
        {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length)
        {
            index = 0;
        }
        if (document.getElementsByClassName("command-list-count") [0] !== undefined)
        {
            var numAtaques = document.getElementsByClassName("command-list-count") [0].innerHTML;
        }
        else
        {
            var numAtaques = 0;
        }
        if (numAtaques < FakesPorAldeia)
        {
            if (numTentativas <= maxTentativas)
            {
                coords = coords[index];
                coords = coords.split("|");
               /* if(spy>document.getElementById("units_entry_all_spy").text.replace(/[^0-9]/g,'')){
                   document.getElementById("village_switch_right").click();
                }*/
                if(light[3]>document.getElementById("units_entry_all_light").text.replace(/[^0-9]/g,'')){
                   var delay = 180000
setTimeout(function() {
window.location.reload();
}, delay);

                    throw new Error("sem tropas boy!!");
                }

                index = index + 1;
                cookie_date = new Date(2020, 11, 11);
                document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                doc.forms[0].x.value = coords[0];
                doc.forms[0].y.value = coords[1];

                delay = 1000
setTimeout(function() {
    points = parseInt(document.getElementsByClassName('village-info')[0].innerText.split("Pontos:").pop().split('.').join(""));
    console.log(points);
//     doc.forms[0].light.value = 30;
//     doc.forms[0].spear.value = 0;
   if(points<50)
               doc.forms[0].light.value = light[0];
 else if(points<100)
     doc.forms[0].light.value = light[1];
                else if(points<200)
                    doc.forms[0].light.value = light[2];
    else
        doc.forms[0].light.value = light[3];
                var delay = 1000;
                console.log(index)
               if(index==1)
                    delay = 600000
}, delay);


setTimeout(function() {
document.forms[0].attack.click();
}, delay);

            }
            else
            {
                data = new Date(2020, 11, 11);
                document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
                document.getElementById("village_switch_right").click();
            }
        }
        else
        {
            document.getElementById("village_switch_right").click();
        }
    }
}
else if (EnviarAtaque)
{
    var BNCheck = document.getElementsByClassName("error");
    var found = false;
    if (found)
    {
        var link = document.getElementById("village_switch_right").click();
        for (i = 0; i < link.length; i++)
        {
            if (link[i].href.search(/screen=place/) != -1)
            {
                numTentativas = numTentativas + 1;
                data = new Date(2020, 11, 11);
                document.cookie = cookieNameTent + "=" + numTentativas + ";expires=" + data.toGMTString();
                window.location.href = link[i].href;
            }
        }
    }
    else
    {

        document.forms[0].troop_confirm_go.click();
    }
}
else
{
    alert("Corra o script apartir da praça de reuniões");
}
        }
})();