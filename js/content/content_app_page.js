chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_BLOCKS_EXPAND"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.game_page_autocollapse_readmore').click();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_MARK_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.glance_tags_ctn').remove();
    }
});

chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('#demo_block').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "APP_PAGE_MAKE_REVIEW_BLOCK_HIDE"}, function (response) {
    if (response.data == 'true') {
        jQuery('#review_container').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "APP_PAGE_CURATORS_BLOCK_HIDE"}, function (response) {
    if (response.data == 'true') {
        jQuery('.steam_curators_block').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "APP_PAGE_RECOMMENDED_BLOCK_HIDE"}, function (response) {
    if (response.data == 'true') {
        jQuery('#recommended_block').remove();
    }
});

// review block [
chrome.extension.sendRequest({
    method: "getLocalStorage",
    key: "APP_PAGE_REVIEW_BLOCK_HIDE"
}, function (response) {
    if (response.data == 'true') {
        jQuery('.user_reviews_header ').remove();
        jQuery('.user_reviews_filter_bar').remove();
        jQuery('#Reviews_all').remove();
    } else {
        checkReviewFilterLabel();
        checkReviewAbout();
    }
});

function checkReviewFilterLabel() {
    chrome.extension.sendRequest({
        method: "getLocalStorage",
        key: "APP_PAGE_REVIEW_BLOCK_FILTER_LABEL_HIDE"
    }, function (response) {
        if (response.data == 'true') {
            jQuery('.user_reviews_filter_text').remove();
        }
    });
}

function checkReviewAbout() {
    chrome.extension.sendRequest({
        method: "getLocalStorage",
        key: "APP_PAGE_REVIEW_BLOCK_ABOUT_HIDE"
    }, function (response) {
        if (response.data == 'true') {
            jQuery('.user_reviews_see_all').remove();
        }
    });
}
// review block ]
