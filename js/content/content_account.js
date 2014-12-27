chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_FIX_FOOTER"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#footer_spacer').css({
            'margin-top': '25px'
        });
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_FAMILY_SHARING_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('a[class=linkbar][href*=managedevice]').closest('.accountInfoBlock').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_TAXES_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        var block = null;
        jQuery('.accountInfoBlock').find('.block_header').find('div').each(function () {
            if (jQuery(this).text() == "Информация о налогах") {
                block = jQuery(this).closest('.accountInfoBlock');
            }
        });
        block.remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_EMAIL_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('a[class=linkbar][href*=emailoptout]').closest('.accountInfoBlock').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_FAMILY_VIEWING_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('a[class=linkbar][href*=parental]').closest('.accountInfoBlock').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_STORE_STATISTIC_BLOCK_SHOW"
}, function (response) {
    if (response.data == 'true') {
        if (location.href.indexOf('store_transactions') != -1) {
            createStoreTransactionStatistic();
        }
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_IN_GAME_STATISTIC_BLOCK_SHOW"
}, function (response) {
    if (response.data == 'true') {
        if (location.href.indexOf('ingame_transactions') != -1) {
            createStoreInGameTransactionStatistic();
        }
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "ACCOUNT_PAGE_COMMUNITY_MARKET_STATISTIC_BLOCK_SHOW"
}, function (response) {
    if (response.data == 'true') {
        if (location.href.indexOf('market_transactions') != -1) {
            createStoreCommunityMarketTransactionStatistic();
        }
    }
});