chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HEADER_FLOAT_LEFT"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#global_actions').css({
            'right': '-93px'
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