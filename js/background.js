/*Данный код будет выполняться сразу после запуска браузера*/
function backgroundCheckNotification() {
    checkNotification('background');
}

$(document).ready(function () {
    setNotificationIcon('processing', '?');
    backgroundCheckNotification();
    setDefaultStorage();
    setInterval(backgroundCheckNotification, 60 * 1000);
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({data: localStorage[request.key]});
    else
        sendResponse({});
});