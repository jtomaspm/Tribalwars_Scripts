// ==UserScript==
// @name      fazer infantaria
// @include     https://*pt79*&screen=barracks*
// ==/UserScript==

atq = ["488|492"]//
aldeia ="";
defesa = []
ignorar = []

wood = parseInt(document.getElementById("wood").innerHTML)
iron = parseInt(document.getElementById("iron").innerHTML)

queue = document.getElementById("trainorder_0")
try{
    aldeia = document.getElementById("menu_row2").childNodes[7].firstChild.innerText.substring(1,8);

}catch(e){
    aldeia = document.getElementById("menu_row2").childNodes[3].firstChild.innerText.substring(1,8);
}

if (atq.includes(aldeia) && queue == null){
    document.getElementById("axe_0").value = 1
    $('input.btn.btn-recruit').click();
}else if(defesa.includes(aldeia) && queue == null){
    if(wood < iron){
        document.getElementById("sword_0").value = 1
        $('input.btn.btn-recruit').click();
       }else{
           document.getElementById("spear_0").value = 1
           $('input.btn.btn-recruit').click();
       }

}else if(ignorar.includes(aldeia)){
    var delay = 20000;
    setTimeout(function() {
        altAldeia();
    }, delay);
}else if(queue == null){
    document.getElementById("spear_0").value = 1
    $('input.btn.btn-recruit').click();
}

var delay = 20000;
    setTimeout(function() {
        altAldeia();
    }, delay);

function altAldeia()
    {
        $('.arrowRight').click();
        $('.groupRight').click();

    }