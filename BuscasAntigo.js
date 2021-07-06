// ==UserScript==
// @name         Scavenge Loop total
// @match       https://pt73.tribalwars.com.pt/game.php*mode=scavenge*
// ==/UserScript==
function ScavengeLoop() {
    var spear = 1;
    var sword = 1;
    var axe = 0;
    var archer = 1;
    var light = 1;

    var heavy = 1;
    var atq = [];//"535|463""522|500","519|485"
    var saveAtq = [];//"538|444"
    var aldeia;
try{
    aldeia = document.getElementById("menu_row2").childNodes[7].firstChild.innerText.substring(1,8);

}catch(e){
    aldeia = document.getElementById("menu_row2").childNodes[3].firstChild.innerText.substring(1,8);
}
    if (atq.includes(aldeia)){
        spear = 1;
        sword = 1;
        axe = 0;
        light = 0;
    }
    if (saveAtq.includes(aldeia)){
        spear = 0;
        sword = 0;
        axe = 0;
        archer = 0;
        light = 0;
    }
    var troops = document.getElementsByClassName("units-entry-all");
    var archWorld = (troops.length==8);
    if (document.getElementsByClassName("btn btn-default unlock-button").length + document.getElementsByClassName("unlocking-view").length== 2) {

        if (document.getElementsByClassName("btn btn-default free_send_button").length == 2) {

            var lancas = (parseInt(troops[0].text.replace(/[^0-9]/g, ''))>1100);
            var lancas100 = (parseInt(troops[0].text.replace(/[^0-9]/g, ''))<100);
            var busca1l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g, '')) * 2 / 7);
            var busca1e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g, '')) * 2 / 7);
            var busca1v = parseInt(parseInt(troops[2].text.replace(/[^0-9]/g, '')) * 2 / 7);
            var busca1a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g, '')) * 2 / 7);
            var busca1li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g, '')) * 2 / 7);
            if(archWorld)
                var busca1h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g, '')) * 2 / 7);
            if(lancas100){
                if (spear == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[0].click();
                if (sword == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[1].click();
                if (axe == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[2].click();
                if (archer == 1 && archWorld)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                if (light == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                }
            }
            else{

                if (spear == 1)
                    $(`input.unitsInput[name='spear']`).val(busca1l).trigger("change");
                if (sword == 1)
                    $(`input.unitsInput[name='sword']`).val(busca1e).trigger("change");
                if (axe == 1)
                    $(`input.unitsInput[name='axe']`).val(busca1v).trigger("change");
                if (archer == 1 && archWorld)
                    $(`input.unitsInput[name='archer']`).val(busca1a).trigger("change");
                if (light == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca1li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca1a).trigger("change");
                }
                if(heavy == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='heavy']`).val(busca1h).trigger("change");
                    else
                        $(`input.unitsInput[name='heavy']`).val(busca1li).trigger("change");
                }
            }

            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[1].click();

            }, 3000);
            setTimeout(function() {
                if(!lancas){
                if (spear == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[0].click();
                if (sword == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[1].click();
                if (axe == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[2].click();
                if (archer == 1 && archWorld)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                if (light == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                }
                if(heavy == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[6].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                }
                document.getElementsByClassName("free_send_button")[0].click();
                }
            }, 7000);




        }
    } else if (document.getElementsByClassName("btn btn-default unlock-button").length + document.getElementsByClassName("unlocking-view").length == 1) {
        if (document.getElementsByClassName("btn btn-default free_send_button").length == 3) {
            var lancas200 = (parseInt(troops[0].text.replace(/[^0-9]/g, ''))<350 && parseInt(troops[4].text.replace(/[^0-9]/g, ''))<50);
            var lancas = (parseInt(troops[0].text.replace(/[^0-9]/g, ''))>900);
            var busca1l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g, '')) / 8);
            var busca1e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g, '')) / 8);
            var busca1v = parseInt(parseInt(troops[2].text.replace(/[^0-9]/g, '')) / 8);
            var busca1a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g, '')) / 8);
            var busca1li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g, '')) / 8);
            var busca2l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g, '')) / 4);
            var busca2e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g, '')) / 4);
            var busca2v = parseInt(parseInt(troops[2].text.replace(/[^0-9]/g, '')) / 4);
            var busca2a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g, '')) / 4);
            var busca2li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g, '')) / 4);
            if(archWorld){
            var busca1h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g, '')) / 8);
            var busca2h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g, '')) / 4);
            }

            if(lancas200){
                var busca1l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g, '')) / 3);
                var busca1e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g, '')) / 3);
                var busca1v = parseInt(parseInt(troops[2].text.replace(/[^0-9]/g, '')) / 3);
                var busca1a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g, '')) / 3);
                var busca1li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g, '')) / 3);
                if (spear == 1)
                $(`input.unitsInput[name='spear']`).val(busca1l).trigger("change");
            if (sword == 1)
                $(`input.unitsInput[name='sword']`).val(busca1e).trigger("change");
            if (axe == 1)
                $(`input.unitsInput[name='axe']`).val(busca1v).trigger("change");
            if (archer == 1 && archWorld)
                $(`input.unitsInput[name='archer']`).val(busca1a).trigger("change");
            if (light == 1){
                if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca1li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca1a).trigger("change");
            }
            if(heavy == 1){
                if(archWorld)
                    $(`input.unitsInput[name='heavy']`).val(busca1h).trigger("change");
                else
                    $(`input.unitsInput[name='heavy']`).val(busca1li).trigger("change");
            }
            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[2].click();

            }, 3000);
                 setTimeout(function() {
  //              if(!lancas){
                if (spear == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[0].click();
                if (sword == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[1].click();
                if (axe == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[2].click();
                if (archer == 1 && archWorld)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                if (light == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                }
                if(heavy == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[6].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                }

                document.getElementsByClassName("free_send_button")[1].click();
 //               }
            }, 11000);
            }
            else{
                if (spear == 1)
                    $(`input.unitsInput[name='spear']`).val(busca1l).trigger("change");
                if (sword == 1)
                    $(`input.unitsInput[name='sword']`).val(busca1e).trigger("change");
                if (axe == 1)
                    $(`input.unitsInput[name='axe']`).val(busca1v).trigger("change");
                if (archer == 1 && archWorld)
                    $(`input.unitsInput[name='archer']`).val(busca1a).trigger("change");
                if (light == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca1li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca1a).trigger("change");
                }
                if(heavy == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='heavy']`).val(busca1h).trigger("change");
                    else
                        $(`input.unitsInput[name='heavy']`).val(busca1li).trigger("change");
                }
                setTimeout(function() {
                    document.getElementsByClassName("free_send_button")[2].click();

                }, 3000);

                setTimeout(function() {
                    if (spear == 1)
                        $(`input.unitsInput[name='spear']`).val(busca2l).trigger("change");
                    if (sword == 1)
                        $(`input.unitsInput[name='sword']`).val(busca2e).trigger("change");
                    if (axe == 1)
                        $(`input.unitsInput[name='axe']`).val(busca2v).trigger("change");
                    if (archer == 1 && archWorld)
                        $(`input.unitsInput[name='archer']`).val(busca2a).trigger("change");
                    if (light == 1){
                        if(archWorld)
                            $(`input.unitsInput[name='light']`).val(busca2li).trigger("change");
                        else
                            $(`input.unitsInput[name='light']`).val(busca2a).trigger("change");
                    }
                    if(heavy == 1){
                        if(archWorld)
                            $(`input.unitsInput[name='heavy']`).val(busca2h).trigger("change");
                        else
                            $(`input.unitsInput[name='heavy']`).val(busca2li).trigger("change");
                    }

                }, 5000);
                setTimeout(function() {
                    document.getElementsByClassName("free_send_button")[1].click();

                }, 8000);
                setTimeout(function() {
                    //              if(!lancas){
                    if (spear == 1)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[0].click();
                    if (sword == 1)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[1].click();
                    if (axe == 1)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[2].click();
                    if (archer == 1 && archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                    if (light == 1){
                        if(archWorld)
                            document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                        else
                            document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                    }
                    if(heavy == 1){
                        if(archWorld)
                            document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[6].click();
                        else
                            document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                    }

                    document.getElementsByClassName("free_send_button")[0].click();
                    //               }
                }, 11000);

            }


        }
    } else if (document.getElementsByClassName("btn btn-default unlock-button").length + document.getElementsByClassName("unlocking-view").length == 0) {
        if (document.getElementsByClassName("btn btn-default free_send_button").length == 4) {
            //var lancas = (parseInt(troops[0].text.replace(/[^0-9]/g, ''))>1100);
            var busca1l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g,''))*2/26);
            var busca1e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g,''))*2/26);
            var busca1v = parseInt((parseInt(troops[2].text.replace(/[^0-9]/g,''))-300)*2/26);
            var busca1a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g,''))*2/26);
            var busca1li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g,''))*2/26);
            var busca2l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g,''))*3/26);
            var busca2e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g,''))*3/26);
            var busca2v = parseInt((parseInt(troops[2].text.replace(/[^0-9]/g,''))-300)*3/26);
            var busca2a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g,''))*3/26);
            var busca2li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g,''))*3/26);
            var busca3l = parseInt(parseInt(troops[0].text.replace(/[^0-9]/g,''))*6/26);
            var busca3e = parseInt(parseInt(troops[1].text.replace(/[^0-9]/g,''))*6/26);
            var busca3v = parseInt((parseInt(troops[2].text.replace(/[^0-9]/g,''))-300)*6/26);
            var busca3a = parseInt(parseInt(troops[3].text.replace(/[^0-9]/g,''))*6/26);
            var busca3li = parseInt(parseInt(troops[4].text.replace(/[^0-9]/g,''))*6/26);
            var busca4v = parseInt((parseInt(troops[2].text.replace(/[^0-9]/g,''))-300)*15/26);
            if(archWorld){
            var busca1h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g,''))*2/26);
            var busca2h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g,''))*3/26);
            var busca3h = parseInt(parseInt(troops[6].text.replace(/[^0-9]/g,''))*6/26);

            }

            if (spear == 1)
                $(`input.unitsInput[name='spear']`).val(busca1l).trigger("change");
            if (sword == 1)
                $(`input.unitsInput[name='sword']`).val(busca1e).trigger("change");
            if (axe == 1)
                $(`input.unitsInput[name='axe']`).val(busca1v).trigger("change");
            if (archer == 1 && archWorld)
                $(`input.unitsInput[name='archer']`).val(busca1a).trigger("change");
            if (light == 1){
                if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca1li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca1a).trigger("change");
            }
            if(heavy == 1){
                if(archWorld)
                    $(`input.unitsInput[name='heavy']`).val(busca1h).trigger("change");
                else
                    $(`input.unitsInput[name='heavy']`).val(busca1li).trigger("change");
            }
            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[3].click();

            }, 3000);

            setTimeout(function() {
                if (spear == 1)
                    $(`input.unitsInput[name='spear']`).val(busca2l).trigger("change");
                if (sword == 1)
                    $(`input.unitsInput[name='sword']`).val(busca2e).trigger("change");
                if (axe == 1)
                    $(`input.unitsInput[name='axe']`).val(busca2v).trigger("change");
                if (archer == 1 && archWorld)
                    $(`input.unitsInput[name='archer']`).val(busca2a).trigger("change");
                if (light == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca2li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca2a).trigger("change");
                }
                if(heavy == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='heavy']`).val(busca2h).trigger("change");
                    else
                        $(`input.unitsInput[name='heavy']`).val(busca2li).trigger("change");
                }
            }, 5000);
            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[2].click();

            }, 7000);
            setTimeout(function() {
                if (spear == 1)
                    $(`input.unitsInput[name='spear']`).val(busca3l).trigger("change");
                if (sword == 1)
                    $(`input.unitsInput[name='sword']`).val(busca3e).trigger("change");
                if (axe == 1)
                    $(`input.unitsInput[name='axe']`).val(busca3v).trigger("change");
                if (archer == 1 && archWorld)
                    $(`input.unitsInput[name='archer']`).val(busca3a).trigger("change");
                if (light == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='light']`).val(busca3li).trigger("change");
                    else
                        $(`input.unitsInput[name='light']`).val(busca3a).trigger("change");
                }
                if(heavy == 1){
                    if(archWorld)
                        $(`input.unitsInput[name='heavy']`).val(busca3h).trigger("change");
                    else
                        $(`input.unitsInput[name='heavy']`).val(busca3li).trigger("change");
                }

            }, 9000);
            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[1].click();

            }, 11000);
            setTimeout(function() {
           // if(!lancas){
                if (spear == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[0].click();
                if (sword == 1)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[1].click();
                if (axe == 1)
                    $(`input.unitsInput[name='axe']`).val(busca4v).trigger("change");
                if (archer == 1 && archWorld)
                    document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                if (light == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[3].click();
                }
                if(heavy == 1){
                    if(archWorld)
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[6].click();
                    else
                        document.getElementById("scavenge_screen").getElementsByClassName("units-entry-all")[4].click();
                }

            //}
            }, 14000);
            setTimeout(function() {
                document.getElementsByClassName("free_send_button")[0].click();

            }, 17000);




        }
    }
    setTimeout(function() {
        altAldeia();
    }, 30000);
}


ScavengeLoop();

function altAldeia() {
    $('.arrowRight').click();
       $('.groupRight').click();
       $('div.arrow.arrowRight').click();
       $('div.arrow.groupRight').click();

if($('.groupRight').length<1 && $('.arrowRight').length<1)
    window.location.reload();
}