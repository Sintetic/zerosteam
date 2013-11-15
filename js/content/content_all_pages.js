chrome.extension.sendRequest({method: "getLocalStorage", key: "commonShowLabelNewMenuItem"}, function (response) {
    if (response.data == 'true') {
        jQuery('.menuitem_new').remove();
    }
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowHeaderButtonDownload"}, function (response) {
    if (response.data == 'true') {
        jQuery('.header_installsteam_btn_rightcap').remove();
        jQuery('.header_installsteam_btn_leftcap').remove();
        jQuery('.header_installsteam_btn_content').remove();
    }
});