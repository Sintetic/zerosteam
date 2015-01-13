chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_LIST_ITEM_REAL_LINK"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.workshopItemCollectionContainer').each(function () {
            var url = jQuery(this).find('.workshopItemCollection').attr('onclick')
                .replace('top.location.href=', '').replace('\'', '');
            jQuery(this).find('.workshopItemCollection').removeAttr('onclick');
            jQuery(this).wrap('<a href="' + url + '"><a>');
        });
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_LIST_ITEM_HIDE_RATING"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.fileRating').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_LIST_ITEM_HIDE_TITLE_UNDERLINE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.workshopItemTitle').css({
            'border-bottom': 'none'
        })
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_LIST_ITEM_HIDE_AUTHOR"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.workshopItemAuthorLine').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_HEADER_SHOW_MAKE_GUIDE_BUTTON"
}, function (response) {
    if (response.data == 'true') {
        var storeButton = jQuery('.apphub_OtherSiteInfo');
        var appId = storeButton.find('a').attr('href').split('/app/')[1];
        var buttonHTML = "<div class='apphub_createGuide'>" +
            "<a style='position: relative; z-index: 1;' class='btnv6_blue_hoverfade btn_medium' " +
            "href='http://steamcommunity.com/sharedfiles/editguide/?appid=" + appId + "'>" +
            "<span>Написать руководство</span></a></div>";
        storeButton.after(buttonHTML);
        jQuery('.apphub_createGuide').css({
            'margin-right': '10px',
            'position': 'relative',
            'float': 'right'
        });
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "GUIDES_PAGE_HEADER_HIDE_SUBTITLE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.subtitle').remove();
    }
});