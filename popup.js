chrome.runtime.sendMessage({ event: "Capture Screenshot" }, function(response) {
	var screenshot = new Image();
	screenshot.src =  response.dataUrl;
	screenshot.style.width = "98vw";
	document.body.appendChild(screenshot);
	var link = document.createElement("a");
	link.download = "Screenshot";
	link.href = response.dataUrl;
	var download = new Image();
	download.src = "Download.svg";
	download.className = "download";
	link.appendChild(download);
	document.body.appendChild(link);
});