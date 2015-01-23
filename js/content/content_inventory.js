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
        var whiteList = response.data.split(' | ');
        modifyGamesTabBlock();
    });
}