var TAB_SEPARATOR = '<div class="games_list_tab_separator"></div>';
var ROW_SEPARATOR = '<div class="games_list_tab_row_separator"></div>';
var FINAL_LINE = '<div style="clear: both; height: 0px;" class=""></div>';

var TAB_IN_LINE_COUNT = 4;

var whiteList = 'Team Fortress 2 | Steam'.split(' | ');
var storedDom = [];

function modifyGamesTabBlock() {
    checkWhiteList();
    fillStoredDom();
    recreateGamesTab();
}


function checkWhiteList() {
    if (whiteList.length == 0) {
        whiteList[0] = 'Steam';
    }
}

function fillStoredDom() {
    jQuery('.games_list_tab').each(function () {
        var tab = jQuery(this);
        if (whiteList.indexOf(getTabName(tab)) != -1) {
            storedDom.push(tab);
        }
    });
}

function recreateGamesTab() {
    var tabPanel = jQuery('.games_list_tabs');
    tabPanel.html('');
    var lineTabCount = 0;
    for (var iterator = 0; iterator < storedDom.length; iterator++) {
        tabPanel.append(storedDom[iterator]);
        tabPanel.append(jQuery(TAB_SEPARATOR));
        lineTabCount++;
        if (lineTabCount >= TAB_IN_LINE_COUNT) {
            lineTabCount = 0;
            tabPanel.append(jQuery(ROW_SEPARATOR));
        }
    }
    tabPanel.append(FINAL_LINE);
}

function getTabName(tab) {
    return tab.find('.games_list_tab_name').text();
}