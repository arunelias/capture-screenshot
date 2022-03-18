chrome.runtime.sendMessage({ event: "Capture Screenshot" }, function(response) {
	var screenshot = new Image();
	screenshot.src =  response.dataUrl;
	screenshot.onload = function () { screenshot.style.width = "98vw"; }
	document.body.appendChild(screenshot);
	var link = document.createElement("a");
	link.download = "Screenshot";
	link.href = response.dataUrl;
	var download = new Image();
	download.src = "Download.svg";
	download.className = "download";
	link.appendChild(download);
	document.body.appendChild(link);
	var link = document.createElement("a");
	link.href = "#";
	link.onclick = async () => {
		const data = await fetch(response.dataUrl);
		const blob = await data.blob();
		await navigator.clipboard.write([ new ClipboardItem({ [blob.type]: blob }) ]);
		window.close();
	};
	var copy = new Image();
	copy.src = "Copy.svg";
	copy.className = "copy";
	link.appendChild(copy);
	document.body.appendChild(link);
});