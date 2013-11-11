chrome.extension.sendRequest({method: "getLocalStorage", key: "commonShowLabelNewMenuItem"}, function(response) {
    console.log(response.data);
    if (response.data == 'false')
    {
        jQuery('.menuitem_new').remove();

    }

});
chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowHeaderButtonDownload"}, function(response) {
    console.log(response.data);
    if (response.data == 'true')
    {
        jQuery('.header_installsteam_btn_rightcap').remove();
        jQuery('.header_installsteam_btn_leftcap').remove();
        jQuery('.header_installsteam_btn_content').remove();
    }

});