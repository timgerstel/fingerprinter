let getHeaders = function(callback){
	var request = new XMLHttpRequest();
}

let getCanvasFP = function(options) {
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
	ctx.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZ, \ud83d\ude03", 2, 15);
	canvas.fillStyle = "rgb(102, 204, 0 0.7)";
	canvas.font = "18pt Arial";
	ctx.fillText("abcdefghijklmnopqrstuvwxyz, \ud83d\ude03", 4, 45);

	if(canvas.toDataURL) results.push(canvas.toDataURL());
	return results;
}

let getUserAgent = function(){
	return navigator.userAgent;
}

let getUserPlatform = function(){
	return navigator.platform;
}

let renderFP = function(){
	document.getElementById('userAgent').innerHTML = getUserAgent();
	document.getElementById('userPlatform').innerHTML = getUserPlatform();
	document.getElementById('fp').innerHTML = getCanvasFP();
}