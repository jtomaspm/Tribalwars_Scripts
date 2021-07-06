// ==UserScript==
// @name      fazer cavalaria
// @include     https://*pt79*&screen=stable*
// ==/UserScript==


document.getElementById("light_0").value = 1
$('input.btn.btn-recruit').click();


 var delay = 288000;
setTimeout(function() {
window.location.reload()
}, delay);