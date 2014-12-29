chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_STEAMCARDEXCHANGE_LINK_SHOW"
}, function (response) {
    if (response.data == 'true') {
        var link = "http://www.steamcardexchange.net/index.php?gamepage-appid-" + location.href.split('gamecards/')[1].replace('/', '');
        jQuery('.gamecards_inventorylink').append("<a class='btn_grey_grey  btn_small_thin' href='"
        + link + "' style='float: right;' target='_blank' >" +
        "<span>Просмотреть подробности</span></a>");
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_SET_IN_PROFILE_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_details_set_favorite').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_HOW_GET_MORE_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.whiteLink.how_to_get_card_drops').remove();
        jQuery('.card_drop_info_dialog.salespend_card_drop_info').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_MORE_GAMESCARDS_SET_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.gamecard_badge_progress_label').remove();
    }
});


chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_PLAY_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_title_playgame').hide();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_HOURS_IN_GAME_LABEL_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_title_stats').css({
            'color': 'transparent'
        })
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_TRADING_FORUM_BUTTON_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_card_to_collect_links').find('a[href*=tradingforum]').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "BADGE_PAGE_FRIENDS_WITH_THIS_BADGE_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.badge_friends_have_earned').remove();
    }
});