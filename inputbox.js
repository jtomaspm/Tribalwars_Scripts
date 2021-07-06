// ==UserScript==
// @name      inputbox
// @include     https://*pt72*mode=members_defense*
// @author       PopAndBoom
// ==/UserScript==

var button = document.createElement("button");
button.innerHTML = "Confirmar";



var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Horas");
  document.getElementById('header_info').append(x);
document.getElementById('header_info').append(button);
//document.getElementById('header_info').appendChild('<tr><td>Chegada:</td><td> <input type="datetime-local" id="CStime" step=".001"> </td></tr><tr> <td>Offset:</td><td> <input type="number" id="CSoffset"> <button type="button" id="CSbutton" class="btn">Confirmar</button> </td></tr>');

button.addEventListener ("click", function() {
  val = x.value;

    document.getElementsByTagName('h2')[0].innerHTML = val;
});

