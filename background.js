chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		chrome.tabs.captureVisibleTab(null, {format: "png"}, function(dataUrl) { sendResponse({ dataUrl:dataUrl }); });
		return true;
	});