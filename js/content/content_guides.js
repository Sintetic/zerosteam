chrome.extension.sendRequest({method: "getLocalStorage", key: "useOnGuidePageEngine"}, function (response) {
    if (response.data == 'true') {
        jQuery('.workshopItemCollectionContainer').each(function () {
            var link = jQuery(this).find('div[class=workshopItemCollection]').attr('onclick').split('href=')[1];
            var title = jQuery(this).find('div[class=workshopItemTitle]').html();
            jQuery(this).find('div[class=workshopItemTitle]').html('<a href=' + link + ' target="_blank">' + title + '</a>');
            jQuery(this).find('div[class=workshopItemCollection]').attr('onclick', "window.open("+link+"), _blank");
        })
    }
});
