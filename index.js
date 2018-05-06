//index.js

function getTemp(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var resp = xmlHttp.responseText.slice(1, -1);
    return resp
}
window.onload = function() {

	var upstairs_info = "Mode: COOL<br>Temp: 70-73 F";
	var downstairs_info = "";
	var COLD = 40; var COLD_COLOR = "#60bdff"; var FREEZE_COLOR = "#99f9ff"; 
	var WARM = 70; var WARM_COLOR = "#ffbb72";
	var HOT = 85; var HOT_COLOR = "#ff8f8f";
	var FIRE = 100; var FIRE_COLOR = "#ff4444";
	var currentTemp = appendTemp();

	//if temp is 100+
	if (currentTemp >= FIRE) {
		downstairs_info = "Mode: COOL<br>Temp: 68-72 F";
		upstairs_info = "Mode: COOL<br>Temp: 68-72 F";
		document.getElementById("side-bar").style.backgroundColor = FIRE_COLOR;
	}
	//if temp is 85-99
	else if (currentTemp >= HOT) {
		downstairs_info = "Mode: COOL<br>Temp: 68-73 F";
		document.getElementById("side-bar").style.backgroundColor = HOT_COLOR;
	}
	//if temp is 70-84
	else if (currentTemp >= WARM) { 
		downstairs_info = "Mode: COOL<br>Temp: 70-75 F";
		document.getElementById("side-bar").style.backgroundColor = WARM_COLOR;
	}
	//if temp is 40-69
	else if (currentTemp >= COLD) {
		downstairs_info = "Mode: OFF<br>";
		document.getElementById("side-bar").style.backgroundColor = COLD_COLOR;
	}
	//if temp is 39 or below
	else {
		downstairs_info = "Mode: HEAT<br>Temp: 70-74";
		upstairs_info = "Mode: OFF<br>";
		document.getElementById("side-bar").style.backgroundColor = FREEZE_COLOR;
	}

	$('#upstairs-display').append(upstairs_info);
	$('#downstairs-display').append(downstairs_info);
}

function appendTemp() {

	var url = "https://i1bvj3zu0m.execute-api.us-east-1.amazonaws.com/prod/command";
	var temp = getTemp(url);
	$('#writable-area-vert-temp').append( temp + " F");
	return temp
}