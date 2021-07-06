// ==UserScript==
// @name         Renomeador de Ataques
// @author       mama aqui
// @include      https://*overview_villages&mode=incomings*
// ==/UserScript==

setTimeout(function () { location.reload(1); }, 50000);
{
 $('input#select_all.selectAll').click();
    setTimeout(function(){
 var label = document.getElementsByName("label");
    label[0].click();
    }, 50000);
}