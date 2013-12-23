chrome.extension.sendRequest({method: "getLocalStorage", key: "autoSetCheckedOnBuySomething"}, function (response) {
    if (response.data == 'true') {
        var intervalID = setInterval(function () {
            if (jQuery('#accept_ssa').size() > 0) {
                jQuery('#accept_ssa').prop('checked', true);
                clearInterval(intervalID);
            }
        }, 1000)
    }
});

