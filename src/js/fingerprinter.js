let getCanvasFP = function() {
	var results = [];
	var canvas = document.createElement('canvas');
	canvas.height = 60;
	canvas.width = 400;
	canvas.style.display = "inline";
	var ctx = canvas.getContext("2d");

	ctx.textBaseline = "alphabetic";
	ctx.fillStyle = "#f60";
	ctx.fillRect(125, 1, 62, 20);
	ctx.fillStyle = "#069";
	canvas.font = "l1pt not-a-real-font-1234";
	var fpString ="ABCDEFGHIJKLMNOPQRSTUVWXYZ ,:\";/\;|' \ud83d\ude03";
	var fpStringL = "abcdefghijklmnopqrstuvwxyz ,:\";/\;|' \ud83d\ude03";
	ctx.fillText(fpString, 2, 15);
	canvas.fillStyle = "rgb(102, 204, 0 0.7)";
	canvas.font = "18pt Arial";
	ctx.fillText("abcdefghijklmnopqrstuvwxyz ,; \ud83d\ude03", 4, 45);

	if(canvas.toDataURL) results.push(canvas.toDataURL());
	return results;
}

let getLanguage = function(){
	return navigator.userLanguage || navigator.language; //navigator.userLanguage used for IE
}

let getPlugins = function(){
	var results = [];
	var numPlugins = navigator.plugins.length;
	var plugins = '';
	if(numPlugins) results.push(`numPlugins: ${numPlugins} </br>`);
	for(var i = 0; i < numPlugins; i++){
		plugins += navigator.plugins[i].name + "</br>";
	}
	if(plugins) results.push(`plugins: </br>${plugins}`);
	return results;
}

let getUserAgent = function(){
	return navigator.userAgent;
}

let getUserPlatform = function(){
	return navigator.platform;
}

let renderFP = function(callback){
	document.getElementById('contentLanguage').innerHTML = getLanguage();
	document.getElementById('userAgent').innerHTML = getUserAgent();
	document.getElementById('userPlatform').innerHTML = getUserPlatform();
	document.getElementById('userPlugins').innerHTML = getPlugins();
	document.getElementById('fp').innerHTML = getCanvasFP();
}