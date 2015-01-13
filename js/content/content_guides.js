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
