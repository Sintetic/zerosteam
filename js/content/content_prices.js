function content_get_steam_prices() {
    var summ = {
        store: {},
        gifts: {},
        market: {
            sell: {},
            purchased: {}
        }
    };

    var selector = '.transactions .transactionRow, .hidden_transactions .transactionRow';
//get transaction blocks items
    var transactions = {
        store: jQuery('#store_transactions div.block').first().find(selector),
        gifts: jQuery('#store_transactions div.block').last().find(selector),
        market: jQuery('#market_transactions').find(selector)
    }
//get only number from price (for example: "0.10" from "$0.10" and "24.04" from "24,04 руб.")
    function getPrice(str) {
        var rez = '';
        for (i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) { //if numeric
                rez = rez.concat(str[i]);
            } else if (str[i] === '.') { //if there is a separator
                if (!isNaN(str[i - 1])) { //if the number before the separator
                    rez = rez.concat('.');
                }
            }
        }
        return rez.replace(' ', ''); //removing any spaces
    }

    function addPrice(item, rate, keyPlace) {
        //get item price with currency
        var line = jQuery(item).children('.transactionRowPrice').html().replace(',', '.');
        //get item price (number only)
        var price = parseFloat(getPrice(line));
        //universal get currency in this item (it's magic!)
        var currency = line.replace(getPrice(line), '').replace(/[\d.]/, '');
        if (keyPlace === 'market') {
            if (!isNaN(price)) { //if price is number
                if (typeof(summ[keyPlace][rate][currency]) !== 'undefined') {
                    summ[keyPlace][rate][currency] += price;
                } else {
                    summ[keyPlace][rate][currency] = price;
                }
            }
        } else {
            if (!isNaN(price)) { //if price is number
                if (typeof(summ[keyPlace][currency]) !== 'undefined') {
                    summ[keyPlace][currency] += price;
                } else {
                    summ[keyPlace][currency] = price;
                }
            }
        }
    }

    jQuery.each(transactions, function (keyPlace, place) { //actions in each transaction
        jQuery.each(place, function (keyItem, item) { //actions in each item transaction
            if (jQuery(item).children('.transactionRowEvent').is('.charge')) { //for all
                addPrice(item, 'purchased', keyPlace);
            }
            if (jQuery(item).children('.transactionRowEvent').is('.walletcredit')) { //only for market
                if (keyPlace === 'market') {
                    addPrice(item, 'sell', keyPlace);
                }
            }
        });
    });

    var total_buy_games = "";
    jQuery.each(summ.store, function (key, value) {
        total_buy_games += value.toFixed(2) + " " + key + "<br>";
    });
    var total_buy_gifts = "";
    jQuery.each(summ.gifts, function (key, value) {
        total_buy_gifts += value.toFixed(2) + " " + key + "<br>";
    });
    var total_buy_in_market = "";
    jQuery.each(summ.market.purchased, function (key, value) {
        total_buy_in_market += value.toFixed(2) + " " + key + "<br>";
    });
    var total_sell_in_market = "";
    jQuery.each(summ.market.sell, function (key, value) {
        total_sell_in_market += value.toFixed(2) + " " + key + "<br>";
    });

    var begin = "<div class='block accountInfoBlock'><div class='block_header'><div>Статистика</div></div><div class='block_content block_content_inner' >";
    var part_one = "<div class='accountRow' style='text-align: right;'><div style='float:left;'>";
    var part_two = "</div><div class=''>";
    var part_three = "</div><div style='clear: left;'></div></div>";
    var part_four = "<div class='inner_rule'></div>";
    var end = "</div></div>";

    jQuery('head').append("<link href='http://cdn.steamcommunity.com/public/css/skin_1/economy.css?v=1298124790' rel='stylesheet' type='text/css'>")
    jQuery('.rightcol').append(begin + part_one + "Потраченно на игры" + part_two + total_buy_games + part_three + part_four + part_one + "Потраченно на подарки" + part_two + total_buy_gifts + part_three + part_four + part_one + "Потраченно на торговой площадке" + part_two + total_buy_in_market + part_three + part_four + part_one + "Заработано на торговой площадке" + part_two + total_sell_in_market + part_three + "<div class='item_market_actions' id='iteminfo1_item_market_actions'><a class='item_market_action_button item_market_action_button_green' href='javascript:SellCurrentSelection()'><span class='item_market_action_button_edge item_market_action_button_left'></span><span class='item_market_action_button_contents'>Продать</span><span class='item_market_action_button_edge item_market_action_button_right'></span><span class='item_market_action_button_preload'></span></a></div>" + end);
}

content_get_steam_prices();
