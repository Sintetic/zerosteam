/*Данный код будет выполняться сразу после запуска браузера*/
function backgroundCheckNotification() {
    checkNotification('background');
}

var intervalID;
var currentUpdateInterval;
function checkSettingAndModifyBackgroundInterval() {
    console.log("summon checkSettingAndModifyBackgroundInterval");
    var updateInterval = localStorage["updateInterval"];
    console.log("updateInterval " + updateInterval);
    if (updateInterval == 'never') {
        if (intervalID != null) {
            clearInterval(intervalID);
            currentUpdateInterval = "-1";
            console.log("stop autoupdate");
        }
    } else {
        console.log("currentUpdateInterval " + currentUpdateInterval);
        if (updateInterval != currentUpdateInterval) {
            clearInterval(intervalID);
            currentUpdateInterval = updateInterval;
            intervalID = setInterval(backgroundCheckNotification, updateInterval * 1000);
            console.log("recreate autoupdate");
        }
    }
}

$(document).ready(function () {
    setNotificationIcon('processing', '?');
    backgroundCheckNotification();
    setDefaultStorage();
    setInterval(checkSettingAndModifyBackgroundInterval, 60 * 1000);
});

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({data: localStorage[request.key]});
    else
        sendResponse({});
});