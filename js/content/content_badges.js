chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGES_PAGE_REMAINING_DROP_LABEL_SHOW"
}, function (response) {
    if (response.data == 'true') {
        var result = 0;
        jQuery('.progress_info_bold').each(function (key, val) {
            result += parseInt(jQuery(val).html().match(/\d+$/), 10);
        });
        jQuery('.profile_badges_header_title').append("<div id='test' style=' text-align: left; color:#FFFFFF; font-size: 12px;'> Еще выпадет карточек: " + result + "</div>")
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGES_PAGE_HEADER_SUPPORT_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.profile_xp_block_right').remove();
        jQuery('.profile_xp_block_mid').css({
            'float': 'right',
            'margin-right': '0px'
        });
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGES_PAGE_HOW_GET_MORE_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.whiteLink.how_to_get_card_drops').remove();
        jQuery('.card_drop_info_dialog').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGES_PAGE_PLAY_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_title_playgame').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGES_PAGE_HOURS_IN_GAME_LABEL_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_title_stats').css({
            'color': 'transparent'
        });
    }
});