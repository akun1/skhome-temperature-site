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
	appendTemp();
}

function appendTemp() {

	var url = "https://i1bvj3zu0m.execute-api.us-east-1.amazonaws.com/prod/command";
	$('#side-bar').append(getTemp(url)+" F");
}