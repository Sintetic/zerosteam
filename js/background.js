/*Данный код будет выполняться сразу после запуска браузера*/
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({data: localStorage[request.key]});
    else
        sendResponse({});
});