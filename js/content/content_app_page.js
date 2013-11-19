function tryGetSteamBuyPrice() {
    var game_title = jQuery('.apphub_AppName').text();
    console.log('game_title: ' + game_title);
    var game_title_from_search = game_title.replace(' ', '+');
    console.log('game_title_from_search: ' + game_title_from_search);
    var search_page_string = "http://steambuy.com/search.php?searchstr=" + game_title_from_search;
    console.log('search_page_string : ' + search_page_string);
    getSteamBuySearchPage(search_page_string, game_title);
}

function getSteamBuySearchPage(search_page_string, game_title) {
    console.log('getSteamBuySearchPageNotification: summon');
    $.ajax({
        async: true,
        cache: false,
        data: null,
        dataType: 'html',
        type: 'post',
        url: search_page_string,
        success: function (data) {
            console.log('getSteamBuySearchPageNotification: success');
            var game_page_string = 'http://steambuy.com/' + $(data).find('.single-game.clearfix').attr('href');
            console.log('game_page_link: ' + game_page_string);
            getSteamBuyGamePageAndPrice(game_page_string, game_title)
        },
        error: function () {
            console.log('getSteamBuySearchPageNotification: error');
        }
    });
}

function getSteamBuyGamePageAndPrice(game_page_string, game_title) {
    console.log('getSteamBuyGamePageAndPrice: summon');
    $.ajax({
        async: true,
        cache: false,
        data: null,
        dataType: 'html',
        type: 'post',
        url: game_page_string,
        success: function (data) {
            console.log('getSteamBuyGamePageAndPrice: success');
            var game_price = $(data).find('.item-price').text();
            console.log('game_price: ' + game_price);
            var html = getHTMLForSteamBuyPrice(game_page_string, game_title, game_price);
            jQuery(jQuery('.game_area_purchase_game')[0]).closest('div[class=game_area_purchase_game_wrapper]').after(html);
        },
        error: function () {
            console.log('getSteamBuyGamePageAndPrice: error');
        }
    });
}

tryGetSteamBuyPrice();

function getHTMLForSteamBuyPrice(game_page_link, game_title, game_price) {
    return "<div class='game_area_purchase_game'>" + "<form>"
        + "<input type='hidden' name='snr'"
        + "<input type='hidden' name='action'"
        + "<input type='hidden' name='subid'"
        + "</form>"
        + "<h1>Купить " + game_title + " (SteamBuy)</h1>"
        + "<div class='game_purchase_action' itemprop='offers' itemscope='' itemtype='http://schema.org/Offer'>"
        + "<div class='game_purchase_action_bg'>"
        + "<div class='game_purchase_price price' itemprop='price'>"
        + game_price + "                        </div>"
        + "<div class='btn_addtocart'>"
        + "<div class='btn_addtocart_left'></div>"
        + "<a class='btn_addtocart_content' href='" + game_page_link + "'>Перейти на SteamBuy</a>"
        + "<div class='btn_addtocart_right'></div>"
        + "<div class='btn_addtocart_right'></div>"
        + "</div>"
        + "</div>"
        + "</div>";
}
