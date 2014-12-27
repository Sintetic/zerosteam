chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.header_installsteam_btn_rightcap').remove();
        jQuery('.header_installsteam_btn_leftcap').remove();
        jQuery('.header_installsteam_btn_content').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST"
}, function (response) {
    if (response.data == 'true') {
        jQuery(jQuery('#account_dropdown').find('a[class=popup_menu_item]')[2]).remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#supernav').find('a[href*=about]').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#supernav').find('a[href*=support]').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_STORE_FOOTER_TOP_HIDE"
}, function (response) {
    if (response.data == 'true') {
        var footerNav = jQuery('#footer_nav');
        var footerNavRuleTop = footerNav.prev();
        var footerNavBrBottom = footerNav.next();
        var footerNavRuleBottom = footerNavBrBottom.next();

        footerNavRuleTop.remove();
        footerNav.remove();
        footerNavBrBottom.remove();
        footerNavRuleBottom.remove();
    }
});


chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_STORE_FOOTER_BOTTOM_HIDE"
}, function (response) {
    if (response.data == 'true') {
        var valveLinks = jQuery('.valve_links');
        var valveLinksRuleTop = valveLinks.prev();

        valveLinksRuleTop.remove();
        valveLinks.remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "COMMON_PAGE_FOOTER_LOGO_FIX"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#footer_logo').css({
            'margin-bottom': '3px',
            'margin-left': '12px'
        });
    }
});
