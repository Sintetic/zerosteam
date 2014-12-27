var RUB_STRING = 'pуб.';
var DOLLAR_STRING = '$';
var NOT_FOUND_INDEX = -1;

var INCOME_KEY = "Счет кошелька";
var CONSUMPTION_KEY = "Покупка";

var MONEY_TYPE = {
    UNKNOWN: "UNKNOWN",
    RUB: "RUB",
    DOLLAR: "DOLLAR"
};

var TRANSACTION_OPERATION_TYPE = {
    UNKNOWN: "UNKNOWN",
    INCOME: "INCOME",
    CONSUMPTION: "CONSUMPTION"
};

var steamTransactionBlock = jQuery('#store_transactions');

var steamStoreTransactionBlock = jQuery(steamTransactionBlock.find('.block')[0]).find('.block_content');
var steamStoreTransactionOpen = steamStoreTransactionBlock.find('.transactions');
var steamStoreTransactionHidden = steamStoreTransactionBlock.find('.hidden_transactions');

var steamStoreGiftTransactionBlock = jQuery(steamTransactionBlock.find('.block')[1]).find('.block_content');
var steamStoreGiftTransactionOpen = steamStoreGiftTransactionBlock.find('.transactions');
var steamStoreGiftTransactionHidden = steamStoreGiftTransactionBlock.find('.hidden_transactions');

var steamInGameTransactionOpen = jQuery('.transactions');
var steamInGameTransactionHidden = jQuery('.hidden_transactions');

var steamCommunityMarketTransactionOpen = jQuery('.transactions');
var steamCommunityMarketTransactionHidden = jQuery('.hidden_transactions');

// функции, используемые для получение уже подсчитанного суммарного total [
function getStoreTransactionTotal() {
    var openTotal = getTotal(steamStoreTransactionOpen);
    var hiddenTotal = getTotal(steamStoreTransactionHidden);
    var total = {};
    for (var type in MONEY_TYPE) {
        var index = MONEY_TYPE[type];
        total[index] = openTotal[index] + hiddenTotal[index];
    }
    return total;
}

function getStoreGiftTransactionTotal() {
    var openTotal = getTotal(steamStoreGiftTransactionOpen);
    var hiddenTotal = getTotal(steamStoreGiftTransactionHidden);
    var total = {};
    for (var type in MONEY_TYPE) {
        var index = MONEY_TYPE[type];
        total[index] = openTotal[index] + hiddenTotal[index];
    }
    return total;
}

function getInGameTransactionTotal() {
    var openTotal = getTotal(steamInGameTransactionOpen);
    var hiddenTotal = getTotal(steamInGameTransactionHidden);
    var total = {};
    for (var type in MONEY_TYPE) {
        var index = MONEY_TYPE[type];
        total[index] = openTotal[index] + hiddenTotal[index];
    }
    return total;
}

function getCommunityMarketTransactionTotal() {
    var openTotal = getCommunityMarketTotal(steamCommunityMarketTransactionOpen);
    var hiddenTotal = getCommunityMarketTotal(steamCommunityMarketTransactionHidden);
    var total = {};
    total[TRANSACTION_OPERATION_TYPE.INCOME] = {};
    total[TRANSACTION_OPERATION_TYPE.CONSUMPTION] = {};
    for (var type in MONEY_TYPE) {
        var index = MONEY_TYPE[type];
        total[TRANSACTION_OPERATION_TYPE.INCOME][index] = openTotal[TRANSACTION_OPERATION_TYPE.INCOME][index]
        + hiddenTotal[TRANSACTION_OPERATION_TYPE.INCOME][index];
        total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][index] = openTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION][index]
        + hiddenTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION][index];
    }
    return total;
}
// функции, используемые для получение уже подсчитанного суммарного total ]

// функции, высчитывающие total и проводящие манипуляции над ним [
function getTotal(steamStoreTransaction) {
    var total = {};
    for (var type in MONEY_TYPE) {
        total[MONEY_TYPE[type]] = 0;
    }
    steamStoreTransaction.find('.transactionRow').find('.transactionRowPrice').each(function () {
        var number = getNumber(jQuery(this).text());
        if (number.type == MONEY_TYPE.RUB) {
            total[MONEY_TYPE.RUB] += number.value;
        }
        if (number.type == MONEY_TYPE.DOLLAR) {
            total[MONEY_TYPE.DOLLAR] += number.value;
        }
    });
    return total;
}

function getCommunityMarketTotal(steamStoreTransaction) {
    var total = {};
    total[TRANSACTION_OPERATION_TYPE.INCOME] = {};
    total[TRANSACTION_OPERATION_TYPE.CONSUMPTION] = {};
    for (var type in MONEY_TYPE) {
        total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE[type]] = 0;
        total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE[type]] = 0;
    }
    steamStoreTransaction.find('.transactionRow').each(function () {
        var operationType = getOperationType(jQuery(this).find('.transactionRowEvent').text());
        if (operationType != TRANSACTION_OPERATION_TYPE.UNKNOWN) {
            var operationRow = jQuery(this).find('.transactionRowPrice');
            var number = getNumber(operationRow.text());
            if (number.type == MONEY_TYPE.RUB) {
                total[operationType][MONEY_TYPE.RUB] += number.value;
            }
            if (number.type == MONEY_TYPE.DOLLAR) {
                total[operationType][MONEY_TYPE.DOLLAR] += number.value;
            }
        }
    });
    return total;
}

function getFormattedTotal(total) {
    var formattedTotal = "";
    if (total[MONEY_TYPE.RUB] != null) {
        if (total[MONEY_TYPE.RUB] != 0) {
            formattedTotal += total[MONEY_TYPE.RUB] + " руб.<br/>";
        }
    }
    if (total[MONEY_TYPE.DOLLAR] != null) {
        if (total[MONEY_TYPE.DOLLAR] != 0) {
            formattedTotal += "$" + total[MONEY_TYPE.DOLLAR] + "<br/>";
        }
    }
    return formattedTotal;
}

function getFormattedCommunityMarketTotal(total) {
    var formattedTotal = {};
    formattedTotal[TRANSACTION_OPERATION_TYPE.INCOME] = "";
    formattedTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION] = "";

    if (total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.RUB] != null) {
        if (total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.RUB] != 0) {
            formattedTotal[TRANSACTION_OPERATION_TYPE.INCOME] += total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.RUB].toFixed(2) + " руб.<br/>";
        }
    }
    if (total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.DOLLAR] != null) {
        if (total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.DOLLAR] != 0) {
            formattedTotal[TRANSACTION_OPERATION_TYPE.INCOME] += '$' + total[TRANSACTION_OPERATION_TYPE.INCOME][MONEY_TYPE.DOLLAR].toFixed(2) + "<br/>";
        }
    }

    if (total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.RUB] != null) {
        if (total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.RUB] != 0) {
            formattedTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION] += total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.RUB].toFixed(2) + " руб.<br/>";
        }
    }
    if (total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.DOLLAR] != null) {
        if (total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.DOLLAR] != 0) {
            formattedTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION] += '$' + total[TRANSACTION_OPERATION_TYPE.CONSUMPTION][MONEY_TYPE.DOLLAR].toFixed(2) + "<br/>";
        }
    }
    return formattedTotal;
}
// функции, высчитывающие total и проводящие манипуляции над ним ]

// функции, используемые при вычислении total [
function getOperationType(string) {
    if (string == INCOME_KEY) {
        return TRANSACTION_OPERATION_TYPE.INCOME;
    }
    if (string == CONSUMPTION_KEY) {
        return TRANSACTION_OPERATION_TYPE.CONSUMPTION;
    }
    return TRANSACTION_OPERATION_TYPE.UNKNOWN;
}

function getNumber(string) {
    var number = {
        type: MONEY_TYPE.UNKNOWN,
        value: 0
    };
    if (string.indexOf(RUB_STRING) != NOT_FOUND_INDEX) {
        number.type = MONEY_TYPE.RUB;
        number.value = parseFloat(string.split(' ')[0].replace(',', '.'));
    }
    if (string.indexOf(DOLLAR_STRING) != NOT_FOUND_INDEX) {
        number.type = MONEY_TYPE.DOLLAR;
        number.value = parseFloat(string.replace('$', '').replace(',', '.'));
    }
    return number;
}
// функции, используемые при вычислении total ]

// функции, добавляющие на необходимые страницы блок статистики [
function createStoreTransactionStatistic() {
    var begin = "<div class='block accountInfoBlock'>" +
        "<div class='block_header'>" +
        "<div>Статистика</div>" + "</div>" +
        "<div class='block_content block_content_inner'>";
    var part_one = "<div class='accountRow' style='text-align: right;'><div style='float:left;'>";
    var part_two = "</div><div class=''>";
    var part_three = "</div><div style='clear: left;'></div></div>";
    var part_four = "<div class='inner_rule'></div>";
    var end = "</div></div>";

    var storeTransactionTotal = getFormattedTotal(getStoreTransactionTotal());
    var storeGiftTransactionTotal = getFormattedTotal(getStoreGiftTransactionTotal());

    /*var total = 0;
     total += storeTransactionTotal;
     total += storeGiftTransactionTotal;
     */

    jQuery('.rightcol').append(begin
    + part_one + "Потраченно на игры" + part_two + storeTransactionTotal + part_three + part_four
    + part_one + "Потраченно на подарки" + part_two + storeGiftTransactionTotal + part_three + part_four
        //+ part_one + "Потрачено всего" + part_two + total + part_three + part_four
    + end);
}

function createStoreInGameTransactionStatistic() {
    var begin = "<div class='block accountInfoBlock'>" +
        "<div class='block_header'>" +
        "<div>Статистика</div>" + "</div>" +
        "<div class='block_content block_content_inner'>";
    var part_one = "<div class='accountRow' style='text-align: right;'><div style='float:left;'>";
    var part_two = "</div><div class=''>";
    var part_three = "</div><div style='clear: left;'></div></div>";
    var part_four = "<div class='inner_rule'></div>";
    var end = "</div></div>";

    var storeTransactionTotal = getFormattedTotal(getInGameTransactionTotal());

    jQuery('.rightcol').append(begin
    + part_one + "Внутриигровые покупки" + part_two + storeTransactionTotal + part_three + part_four
    + end);
}

function createStoreCommunityMarketTransactionStatistic() {
    var begin = "<div class='block accountInfoBlock'>" +
        "<div class='block_header'>" +
        "<div>Статистика</div>" + "</div>" +
        "<div class='block_content block_content_inner'>";
    var part_one = "<div class='accountRow' style='text-align: right;'><div style='float:left;'>";
    var part_two = "</div><div class=''>";
    var part_three = "</div><div style='clear: left;'></div></div>";
    var part_four = "<div class='inner_rule'></div>";
    var end = "</div></div>";

    var storeTransactionTotal = getFormattedCommunityMarketTotal(getCommunityMarketTransactionTotal());

    jQuery('.rightcol').append(begin
    + part_one + "Потраченно" + part_two + storeTransactionTotal[TRANSACTION_OPERATION_TYPE.CONSUMPTION] + part_three + part_four
    + part_one + "Заработано" + part_two + storeTransactionTotal[TRANSACTION_OPERATION_TYPE.INCOME] + part_three + part_four
        //+ part_one + "Потрачено всего" + part_two + total + part_three + part_four
    + end);
}
// функции, добавляющие на необходимые страницы блок статистики ]