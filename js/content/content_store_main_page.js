chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_STORE_PAGE_FLOAT_CENTER"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.home_page_body_ctn ').css({
            'margin-right': '187px'
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
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HIDE_BROWSE_BY_RECOMMENDED_BLOCK"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#home_gutter_recommendedtags').remove();
    }
});
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HIDE_EXPLORE_BLOCK"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.discovery_queue_ctn').find('.home_page_content').remove();
    }
});
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_HIDE_CURATORS_BLOCK"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.steam_curators_ctn').find('.home_page_content').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "MAIN_PAGE_REMOVE_ENDLESS_FOOTER"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#homecontent_anchor').closest('.home_ctn').remove();
        jQuery('#home_recommended_more').remove();
    }
});