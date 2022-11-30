
var max_ms = 0;
var max_s = 0;
var max_m = 0;

let l1;
let t1;
let t2;
let t3;
let t4;
let t5;
let t6;
let t7;
let param;
let timer_msec;
let timer_sec;
let timer_min;


function timer() {
    var ms = 0;
    var s = 0;
    var min_i = 0;
    var msec = document.getElementById("msec");
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");
        timer_msec = setInterval(function () {
            ms++;
        if (ms < 10) {
            var time_ms = document.createTextNode("0"+ms);
            msec.replaceChild(time_ms,msec.firstChild);
        } 
        if (ms > 9) {
            var time_ms = document.createTextNode(ms);
            msec.replaceChild(time_ms,msec.firstChild);
        }
        if (ms == 100) {
            ms = 0;
        }
        } , 10);
        
        timer_sec = setInterval(function () {
            s++;
        if (s < 10) {
            var time_s = document.createTextNode("0"+s);
            sec.replaceChild(time_s,sec.firstChild);
        }
        if (s > 9) {
            var time_s = document.createTextNode(s);
            sec.replaceChild(time_s,sec.firstChild);
        }
        if (s == 59) {
            s = -1;
        }
        } , 1000);

        timer_min = setInterval(function () {
            min_i++;
        if (min_i < 10) {
            var time_min = document.createTextNode("0"+min_i);
            min.replaceChild(time_min,min.firstChild);
        }
        if (min_i > 9) {
            var time_min = document.createTextNode(min_i);
            min.replaceChild(time_min,min.firstChild);
        }

        }, 60000);
}


function getparam() {
    max_ms = 0;
    max_s = 0;
    max_m = 0;
    var t_size = document.getElementById("table_size").value;
    var c_size = document.getElementById("cell_size").value;
    var z_size = document.getElementById("z_size").value;
    var time1 = document.getElementById("t1_time").value;
    var time2 = document.getElementById("t2_time").value;
    param = [t_size,c_size,z_size,time1,time2];

    var h2 = document.getElementById("records");
    var r = document.cookie.match(param+"=(.*?)(?:;|$)");
    if (r) {
        var time = document.createTextNode(r[1]);
        if (h2.firstChild)
        h2.replaceChild(time,h2.firstChild);
        else
        h2.appendChild(time);
    }
    else {
        var time = document.createTextNode("00:00'00");
        if (h2.firstChild)
        h2.replaceChild(time,h2.firstChild);
        else
        h2.appendChild(time);
    }
}

function stop() {


    var zz = document.createTextNode("00");
    var ms = document.getElementById("msec");
    var z2 = document.createTextNode("00");
    var s = document.getElementById("sec");
    var z3 = document.createTextNode("00");
    var m = document.getElementById("min");

    var t_size = document.getElementById("table_size").value;
    var c_size = document.getElementById("cell_size").value;
    var z_size = document.getElementById("z_size").value;
    var time1 = document.getElementById("t1_time").value;
    var time2 = document.getElementById("t2_time").value;

    param = [t_size,c_size,z_size,time1,time2];

    if (m.firstChild.nodeValue >= max_m)
    if (s.firstChild.nodeValue >= max_s)
    if (ms.firstChild.nodeValue > max_ms) {
        max_m = m.firstChild.nodeValue;
        max_s = s.firstChild.nodeValue;
        max_ms = ms.firstChild.nodeValue;
    var t = m.firstChild.nodeValue+":"+s.firstChild.nodeValue+"'"+ms.firstChild.nodeValue;
    document.cookie = param+"="+t+"";
    }
    
    ms.replaceChild(zz,ms.firstChild);
    s.replaceChild(z2,s.firstChild);
    m.replaceChild(z3,m.firstChild);

    

    clearInterval(l1);
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    clearTimeout(t4);
    clearTimeout(t5);
    clearTimeout(t6);
    clearTimeout(t7);
    clearInterval(timer_msec);
    clearInterval(timer_sec);
    clearInterval(timer_min);
    clearInterval(_lose);
    var stop_btn = document.getElementById("stop_btn");
    var gf = document.getElementById("game_field");
    var table = document.getElementById("tb_id");
    stop_btn.setAttribute("disabled","");
    var start_btn = document.getElementById("start_btn");
    start_btn.removeAttribute("disabled");
    gf.removeChild(table);
    document.getElementById("table_size").removeAttribute("disabled","");
    document.getElementById("cell_size").removeAttribute("disabled","");
    document.getElementById("z_size").removeAttribute("disabled","");
    document.getElementById("t1_time").removeAttribute("disabled","");
    document.getElementById("t2_time").removeAttribute("disabled","");

    getparam();
}

function create_table (start_but) {
    var stop_btn = document.getElementById("stop_btn");
    stop_btn.removeAttribute("disabled");
    start_but.setAttribute("disabled","");
    var t_size = document.getElementById("table_size").value;
    document.getElementById("table_size").setAttribute("disabled","");
    var c_size = document.getElementById("cell_size").value;
    document.getElementById("cell_size").setAttribute("disabled","");
    var z_size = document.getElementById("z_size").value;
    document.getElementById("z_size").setAttribute("disabled","");
    var time1 = document.getElementById("t1_time").value;
    document.getElementById("t1_time").setAttribute("disabled","");
    document.getElementById("t2_time").setAttribute("disabled","");
    var gf = document.getElementById("game_field");

    var table = document.createElement("table");
    table.setAttribute("style", "border:1px solid black;");
    table.setAttribute("align", "center");
    table.id = "tb_id";
    if (document.getElementById("tb_id"))
    gf.replaceChild(table, document.getElementById("tb_id"))
    else
    gf.appendChild(table);
    table.createTBody();
        for(var i=0; i < t_size; i++) {
        var row = table.insertRow(i);
            for(var j=0; j < t_size; j++) {
            var cell = row.insertCell(j);
            cell.setAttribute("style", "border:1px solid black; text-align: center; width:"+c_size+"px; height:"+c_size+"px;");
            cell.setAttribute("class","_0");
            cell.setAttribute("onclick","health_lvldown(this)");
            var cr_div = document.createElement("div");
            var div = cell.appendChild(cr_div);
            div.appendChild(document.createTextNode("\n"))
            div.setAttribute("class", "cent");
            div.setAttribute("style", "width:"+z_size+"px; height:"+z_size+"px;");
            div.setAttribute("onclick","health(this)");
            }
        }
    l1 = setInterval(_level_1, time1);
    _lose = setInterval(lose, time1);
    timer();
}

function _level_1() {
    var time2 = document.getElementById("t2_time").value;
    var table = document.getElementById("tb_id");
    var white_cells = table.getElementsByClassName("_0");
    var rand = Math.random() * white_cells.length;
    var cell = white_cells[Math.floor(rand)];
    cell.setAttribute("class","_1");
    t1 = setTimeout(function(){ _levelup2(cell) }, time2);
}

function _levelup2(el) {
    var time2 = document.getElementById("t2_time").value;
    if (el.nodeType == 1)
    if (el.getAttribute("class") == "_1")
    el.setAttribute("class","_2");
    t2 = setTimeout(function(){ _levelup3(el) }, time2);
}

function _levelup3(el) {
    var time2 = document.getElementById("t2_time").value;
    if (el.nodeType == 1)
    if (el.getAttribute("class") == "_2")
    el.setAttribute("class","_3");
    t3 = setTimeout(function(){ _levelup4(el) }, time2);
}

function _levelup4(el) {
    var l1 = "";
    var l2 = "";
    var l3 = "";
    var l4 = "";
    if (el.nodeType == 1)
    if (el.getAttribute("class") == "_3") {
    var time2 = document.getElementById("t2_time").value;
    if (el.nextSibling) {
	if (el.nextSibling.getAttribute("class") == "_0") {
	l1 = el.nextSibling;
    l1.setAttribute("class","_1");
    t4 = setTimeout(function(){ _levelup2(l1) }, time2);
    }
    }

    if (el.previousSibling) {
	if (el.previousSibling.getAttribute("class") == "_0") {
	l2 = el.previousSibling;
    l2.setAttribute("class","_1");
    t5 = setTimeout(function(){ _levelup2(l2) }, time2);
    }
    }

	var cell_i = el.cellIndex;

    if (el.parentNode.previousSibling) {
	if (el.parentNode.previousSibling.cells.item(cell_i).getAttribute("class") == "_0") {
	l3 = el.parentNode.previousSibling.cells.item(cell_i);
    l3.setAttribute("class","_1");
    t6 = setTimeout(function(){ _levelup2(l3) }, time2);
    }
    }

    if (el.parentNode.nextSibling) {
	if (el.parentNode.nextSibling.cells.item(cell_i).getAttribute("class") == "_0") {
	l4 = el.parentNode.nextSibling.cells.item(cell_i);
    l4.setAttribute("class","_1");
    t7 = setTimeout(function(){ _levelup2(l4) }, time2);
    }
    }

    }
	}



function health(ev) {
    ev.parentNode.setAttribute("class","_0");
}

function health_lvldown(el) {
    var time2 = document.getElementById("t2_time").value;
    if (el.getAttribute("class") == "_1") {
    el.setAttribute("class","_0");
    }
    if (el.getAttribute("class") == "_2") {
    el.setAttribute("class","_1");
    t2 = setTimeout(function(){ _levelup2(el) }, time2);
    }
    if (el.getAttribute("class") == "_3") {
    el.setAttribute("class","_2");
    t3 = setTimeout(function(){ _levelup3(el) }, time2);
    }
}

function lose() {
    var t_size = document.getElementById("table_size").value;
    var count = t_size*t_size;
    var cnt = count-Math.floor(count*0.8);
    var table = document.getElementById("tb_id");
    var r_cells = table.getElementsByClassName("_0").length;
    if (r_cells <= cnt)
    stop();
}
