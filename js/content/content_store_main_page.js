chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HEADER_FLOAT_RIGHT"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#global_actions').css({
            'right': '-93px'
        });
    }
});
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_GLOBAL_MENU_FLOAT_RIGHT"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.logo').css({
            'margin-left': '93px'
        });
        jQuery('#supernav').css({
            'left': '275px'
        });
    }
});
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK"
}, function (response) {
    if (response.data == 'true') {
        jQuery(jQuery('.home_page_gutter_block')[0]).remove();
    }
});