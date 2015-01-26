chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "INVENTORY_PAGE_HIDE_GAMES_TAB"
}, function (response) {
    if (response.data == 'true') {
        modifyTabsByWhiteList();
    }
});

function modifyTabsByWhiteList() {
    chrome.extension.sendRequest({
        method: "getLocalStorage",
        key: "INVENTORY_PAGE_HIDE_GAMES_TAB_WHITE_LIST"
    }, function (response) {
        initWhiteList(response.data.split(', '));
        modifyGamesTabBlock();
    });
}

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "INVENTORY_PAGE_HIDE_LOGO"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#inventory_logos').hide();
        jQuery('#context_selector').css({
            'margin-top': '20px'
        });
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "INVENTORY_PAGE_HIDE_FILTER"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.inventory_filters').hide();
    }
});