chrome.extension.sendRequest({method: "getLocalStorage", key: "useOnGuidePageEngine"}, function (response) {
    if (response.data != 'true') {
    } else {
        jQuery('.workshopItemCollectionContainer').each(function () {
            var link = jQuery(this).find('div[class=workshopItemCollection]').attr('onclick').split('href=')[1];
            var old_inner_html = jQuery(this).html();
            jQuery(this).html('<a href=' + link + ' target="_blank">' + old_inner_html + '</a>');
            jQuery(this).find('div[class=workshopItemCollection]').attr('onclick', '');
        })
    }
});
