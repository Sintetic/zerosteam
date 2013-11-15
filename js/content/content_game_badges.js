chrome.extension.sendRequest({method: "getLocalStorage", key: "mainGameCardsCheckbox"}, function (response) {
    if (response.data == 'true') {
        var link = "http://www.steamcardexchange.net/index.php?gamepage-appid-" + location.href.split('gamecards/')[1].replace('/', '');
        jQuery('.gamecards_inventorylink').append("<a class='btn_grey_grey  btn_small_thin' href='" + link + "' style='float: right;' target='_blank' ><span>Просмотреть подробности</span></a>");
    }
});