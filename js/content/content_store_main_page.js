

chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowRealItemStoreBlock"}, function(response) {
    console.log(response.data);
    if (response.data == 'false')
    {
        jQuery(jQuery('a[href*=valvesoftware][href*=store]')[0]).closest('div[class=block]').remove();
    }
});

chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowVKItemInRSSAndOtherBlock"}, function(response) {
    console.log(response.data);
    if (response.data == 'true')
    {
        jQuery('.block_content.block_content_inner').find('a[class=linkbar][href*=facebook]').after("<a href='http://vk.com/steam' target='_blank' class='linkbar'><div class='rightblock'><img src='https://raw.github.com/Sintetic/zerosteam/master/img/vk_14x14.png'></div>Наша страница Вконтакте</a>")

    }
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowRSSAndOtherBlock"}, function(response) {
    console.log(response.data);
    if (response.data == 'false')
    {
        jQuery('.block_content.block_content_inner').find('a[class=linkbar][href*=facebook]').closest('div[class=block]').remove();

    }
});
chrome.extension.sendRequest({method: "getLocalStorage", key: "mainStorePageShowGiftBlock"}, function(response) {
    console.log(response.data);
    if (response.data == 'false')
    {
        jQuery(jQuery('a[href*=gifts][href*=support]')[0]).closest('div[class=block]').remove();

    }
});