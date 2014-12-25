chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_BLOCKS_EXPAND"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.game_page_autocollapse_readmore').click();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_MARK_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.glance_tags_ctn').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#demo_block').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "APP_PAGE_MAKE_REVIEW_BLOCK_HIDE"}, function (response) {
    if (response.data == 'true') {
        jQuery('#review_container').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "APP_PAGE_CURATORS_BLOCK_HIDE"}, function (response) {
    if (response.data == 'true') {
        jQuery('.steam_curators_block').remove();
    }
});
