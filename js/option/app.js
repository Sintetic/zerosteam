var app = angular.module('ZeroSteam', [
    'ngMaterial',
    'ui.router'
]);

app.constant('ROUTES', {
    STEAM_COMMON_PAGE_URL: "/steam/common",
    STEAM_COMMON_PAGE_TEMPLATE: "../html/pages/steam_common.html",

    STEAM_MAIN_PAGE_URL: "/steam/main",
    STEAM_MAIN_PAGE_TEMPLATE: "../html/pages/steam_main.html",

    STEAM_APP_PAGE_URL: "/steam/app",
    STEAM_APP_PAGE_TEMPLATE: "../html/pages/steam_app.html",

    STEAM_ACCOUNT_PAGE_URL: "/steam/account",
    STEAM_ACCOUNT_PAGE_TEMPLATE: "../html/pages/steam_account.html",

    STEAM_PROFILE_PAGE_URL: "/steam/profile",
    STEAM_PROFILE_PAGE_TEMPLATE: "../html/pages/steam_profile.html",

    STEAM_BADGES_PAGE_URL: "/steam/badges",
    STEAM_BADGES_PAGE_TEMPLATE: "../html/pages/steam_badges.html",

    STEAM_BADGE_PAGE_URL: "/steam/badge",
    STEAM_BADGE_PAGE_TEMPLATE: "../html/pages/steam_badge.html",

    STEAM_GUIDES_PAGE_URL: "/steam/guides",
    STEAM_GUIDES_PAGE_TEMPLATE: "../html/pages/steam_guides.html",

    STEAM_INVENTORY_PAGE_URL: "/steam/inventory",
    STEAM_INVENTORY_PAGE_TEMPLATE: "../html/pages/steam_inventory.html",

    EXTENSION_ABOUT_PAGE_URL: "/steam/about",
    EXTENSION_ABOUT_PAGE_TEMPLATE: "../html/pages/extension-about.html"
});

app.constant('OPTIONS', {
    COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD: "COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD",
    COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST: "COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST",
    COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT: "COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT",
    COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT: "COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT",
    COMMON_PAGE_STORE_FOOTER_TOP_HIDE: "COMMON_PAGE_STORE_FOOTER_TOP_HIDE",
    COMMON_PAGE_STORE_FOOTER_BOTTOM_HIDE: "COMMON_PAGE_STORE_FOOTER_BOTTOM_HIDE",
    COMMON_PAGE_FOOTER_LOGO_FIX: "COMMON_PAGE_FOOTER_LOGO_FIX",
    COMMON_PAGE_LANGUAGE_LIST_SIMPLIFY: "COMMON_PAGE_LANGUAGE_LIST_SIMPLIFY",
    COMMON_PAGE_SUPPORT_TRANSLATE_STEAM_HIDE: "COMMON_PAGE_SUPPORT_TRANSLATE_STEAM_HIDE",

    MAIN_STORE_PAGE_FLOAT_CENTER: "MAIN_STORE_PAGE_FLOAT_CENTER",
    MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK: "MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK",
    MAIN_PAGE_HIDE_BROWSE_BY_RECOMMENDED_BLOCK: "MAIN_PAGE_HIDE_BROWSE_BY_RECOMMENDED_BLOCK",
    MAIN_PAGE_HIDE_EXPLORE_BLOCK: "MAIN_PAGE_HIDE_EXPLORE_BLOCK",
    MAIN_PAGE_HIDE_CURATORS_BLOCK: "MAIN_PAGE_HIDE_CURATORS_BLOCK",
    MAIN_PAGE_REMOVE_ENDLESS_FOOTER: "MAIN_PAGE_REMOVE_ENDLESS_FOOTER",

    APP_PAGE_BLOCKS_EXPAND: "APP_PAGE_BLOCKS_EXPAND",
    APP_PAGE_MARK_BLOCK_HIDE: "APP_PAGE_MARK_BLOCK_HIDE",
    APP_PAGE_MAKE_REVIEW_BLOCK_HIDE: "APP_PAGE_MAKE_REVIEW_BLOCK_HIDE",
    APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE: "APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE",
    APP_PAGE_CURATORS_BLOCK_HIDE: "APP_PAGE_CURATORS_BLOCK_HIDE",

    ACCOUNT_PAGE_FIX_FOOTER: "ACCOUNT_PAGE_FIX_FOOTER",
    ACCOUNT_PAGE_FAMILY_SHARING_BLOCK_HIDE: "ACCOUNT_PAGE_FAMILY_SHARING_BLOCK_HIDE",
    ACCOUNT_PAGE_TAXES_BLOCK_HIDE: "ACCOUNT_PAGE_TAXES_BLOCK_HIDE",
    ACCOUNT_PAGE_EMAIL_BLOCK_HIDE: "ACCOUNT_PAGE_EMAIL_BLOCK_HIDE",
    ACCOUNT_PAGE_FAMILY_VIEWING_BLOCK_HIDE: "ACCOUNT_PAGE_FAMILY_VIEWING_BLOCK_HIDE",
    ACCOUNT_PAGE_STORE_STATISTIC_BLOCK_SHOW: "ACCOUNT_PAGE_STORE_STATISTIC_BLOCK_SHOW",
    ACCOUNT_PAGE_IN_GAME_STATISTIC_BLOCK_SHOW: "ACCOUNT_PAGE_IN_GAME_STATISTIC_BLOCK_SHOW",
    ACCOUNT_PAGE_COMMUNITY_MARKET_STATISTIC_BLOCK_SHOW: "ACCOUNT_PAGE_COMMUNITY_MARKET_STATISTIC_BLOCK_SHOW",

    BADGES_PAGE_REMAINING_DROP_LABEL_SHOW: "BADGES_PAGE_REMAINING_DROP_LABEL_SHOW",
    BADGES_PAGE_HEADER_SUPPORT_HIDE: "BADGES_PAGE_HEADER_SUPPORT_HIDE",
    BADGES_PAGE_HOW_GET_MORE_BUTTON_HIDE: "BADGES_PAGE_HOW_GET_MORE_BUTTON_HIDE",
    BADGES_PAGE_PLAY_BUTTON_HIDE: "BADGES_PAGE_PLAY_BUTTON_HIDE",
    BADGES_PAGE_HOURS_IN_GAME_LABEL_HIDE: "BADGES_PAGE_HOURS_IN_GAME_LABEL_HIDE",

    BADGE_PAGE_STEAMCARDEXCHANGE_LINK_SHOW: "BADGE_PAGE_STEAMCARDEXCHANGE_LINK_SHOW",
    BADGE_PAGE_SET_IN_PROFILE_BUTTON_HIDE: "BADGE_PAGE_SET_IN_PROFILE_BUTTON_HIDE",
    BADGE_PAGE_HOW_GET_MORE_BUTTON_HIDE: "BADGE_PAGE_HOW_GET_MORE_BUTTON_HIDE",
    BADGE_PAGE_MORE_GAMESCARDS_SET_HIDE: "BADGE_PAGE_MORE_GAMESCARDS_SET_HIDE",
    BADGE_PAGE_PLAY_BUTTON_HIDE: "BADGE_PAGE_PLAY_BUTTON_HIDE",
    BADGE_PAGE_HOURS_IN_GAME_LABEL_HIDE: "BADGE_PAGE_HOURS_IN_GAME_LABEL_HIDE",
    BADGE_PAGE_TRADING_FORUM_BUTTON_HIDE: "BADGE_PAGE_TRADING_FORUM_BUTTON_HIDE",
    BADGE_PAGE_FRIENDS_WITH_THIS_BADGE_BLOCK_HIDE: "BADGE_PAGE_FRIENDS_WITH_THIS_BADGE_BLOCK_HIDE",


    GUIDES_PAGE_HEADER_SHOW_MAKE_GUIDE_BUTTON: "GUIDES_PAGE_HEADER_SHOW_MAKE_GUIDE_BUTTON",
    GUIDES_PAGE_HEADER_HIDE_SUBTITLE: "GUIDES_PAGE_HEADER_HIDE_SUBTITLE",
    GUIDES_PAGE_LIST_ITEM_REAL_LINK: "GUIDES_PAGE_LIST_ITEM_REAL_LINK",
    GUIDES_PAGE_LIST_ITEM_HIDE_RATING: "GUIDES_PAGE_LIST_ITEM_HIDE_RATING",
    GUIDES_PAGE_LIST_ITEM_HIDE_TITLE_UNDERLINE: "GUIDES_PAGE_LIST_ITEM_HIDE_TITLE_UNDERLINE",
    GUIDES_PAGE_LIST_ITEM_HIDE_AUTHOR: "GUIDES_PAGE_LIST_ITEM_HIDE_AUTHOR",

    INVENTORY_PAGE_HIDE_GAMES_TAB: "INVENTORY_PAGE_HIDE_GAMES_TAB",
    INVENTORY_PAGE_HIDE_GAMES_TAB_WHITE_LIST: "INVENTORY_PAGE_HIDE_GAMES_TAB_WHITE_LIST",
    INVENTORY_PAGE_HIDE_LOGO: "INVENTORY_PAGE_HIDE_LOGO",
    INVENTORY_PAGE_HIDE_FILTER: "INVENTORY_PAGE_HIDE_FILTER",


    UNKNOWN: ""
});

app.constant('SCREENSHOTS', {
    COMMON_PAGE_GLOBAL_MENU: "../img/screenshot/common_page_global_menu.png",
    COMMON_PAGE_STORE_FOOTER: "../img/screenshot/common_page_store_footer_block.png",

    MAIN_PAGE_BROWSE_BY_GENRE_BLOCK: "../img/screenshot/browse_by_genre_block.png",
    MAIN_PAGE_BROWSE_BY_RECOMMENDED_BLOCK: "../img/screenshot/browse_by_recommended_block.png",

    APP_PAGE_MARK_BLOCK: "../img/screenshot/app_page_mark_block.png",
    APP_PAGE_MAKE_REVIEW_BLOCK: "../img/screenshot/app_page_make_review_block.png",
    APP_PAGE_SHARE_AND_ABUSE_BLOCK: "../img/screenshot/app_page_share_and_abuse_block.png",
    APP_PAGE_CURATORS_BLOCK: "../img/screenshot/app_page_curators_block.png",

    ACCOUNT_PAGE_FAMILY_SHARING_BLOCK: "../img/screenshot/account_page_family_sharing_block.png",
    ACCOUNT_PAGE_TAXES_BLOCK: "../img/screenshot/account_page_taxes_block.png",
    ACCOUNT_PAGE_EMAIL_BLOCK: "../img/screenshot/account_page_email_block.png",
    ACCOUNT_PAGE_FAMILY_VIEWING_BLOCK: "../img/screenshot/account_page_family_viewing_block.png",

    BADGES_PAGE_HEADER: "../img/screenshot/badges_page_header.png",
    BADGES_PAGE_LIST_ITEM: "../img/screenshot/badges_page_list_item.png",

    BADGE_PAGE_HEADER_BLOCK: "../img/screenshot/badge_page_header_block.png",
    BADGE_PAGE_FRIENDS_WITH_THIS_BADGE: "../img/screenshot/badge_page_friends_with_this_badge.png",

    GUIDES_PAGE_LIST_ITEM: "../img/screenshot/guides_page__list_item.png",
    GUIDES_PAGE_HEADER: "../img/screenshot/guides_page_header.png",

    INVENTORY_PAGE_HEAD_TABS_BLOCK: "../img/screenshot/inventory_page_head_tabs_block.png",
    INVENTORY_PAGE_CONTENT_BLOCK: "../img/screenshot/inventory_page_content_block.png",

    UNKNOWN: ""
});

app.constant('DEMONSTRATIONS', {
    MAIN_STORE_PAGE_FLOAT_CENTER: "../img/demonstration/main_store_page_float_center.png",

    ACCOUNT_PAGE_FIX_FOOTER: "../img/demonstration/account_page_fix_footer.png",
    ACCOUNT_PAGE_STORE_STATISTIC_BLOCK_SHOW: "../img/demonstration/account_page_store_statistic_block_show.png",
    ACCOUNT_PAGE_IN_GAME_STATISTIC_BLOCK_SHOW: "../img/demonstration/account_page_in_game_statistic_block_show.png",
    ACCOUNT_PAGE_COMMUNITY_MARKET_STATISTIC_BLOCK_SHOW: "../img/demonstration/account_page_community_market_statistic_block_show.png",

    COMMON_PAGE_FOOTER_LOGO_FIX: "../img/demonstration/common_page_footer_logo_fix.png",

    BADGES_PAGE_REMAINING_DROP_LABEL_SHOW: "../img/demonstration/badges_page_remaining_drop_label_show.png",
    BADGES_PAGE_HEADER_SUPPORT_HIDE: "../img/demonstration/badges_page_header_support_hide.png",

    BADGE_PAGE_HEADER_SUPPORT_HIDE: "../img/demonstration/badges_page_header_support_hide.png",
    BADGE_PAGE_STEAMCARDEXCHANGE_LINK: "../img/demonstration/badge_page_steamcardexchange_link.png",

    UNKNOWN: ""
});

app.config(function ($compileProvider, $stateProvider, $urlRouterProvider, ROUTES) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
    $urlRouterProvider.otherwise(ROUTES.STEAM_COMMON_PAGE_URL);
    /*Относящееся ко всем страницам*/
    $stateProvider.state(ROUTES.STEAM_COMMON_PAGE_URL, {
        url: ROUTES.STEAM_COMMON_PAGE_URL,
        templateUrl: ROUTES.STEAM_COMMON_PAGE_TEMPLATE
    });
    /*Главная страница Steam*/
    $stateProvider.state(ROUTES.STEAM_MAIN_PAGE_URL, {
        url: ROUTES.STEAM_MAIN_PAGE_URL,
        templateUrl: ROUTES.STEAM_MAIN_PAGE_TEMPLATE
    });
    /*Страница приложения*/
    $stateProvider.state(ROUTES.STEAM_APP_PAGE_URL, {
        url: ROUTES.STEAM_APP_PAGE_URL,
        templateUrl: ROUTES.STEAM_APP_PAGE_TEMPLATE
    });
    /*Страница аккаунта*/
    $stateProvider.state(ROUTES.STEAM_ACCOUNT_PAGE_URL, {
        url: ROUTES.STEAM_ACCOUNT_PAGE_URL,
        templateUrl: ROUTES.STEAM_ACCOUNT_PAGE_TEMPLATE
    });
    /*Страница профиля*/
    $stateProvider.state(ROUTES.STEAM_PROFILE_PAGE_URL, {
        url: ROUTES.STEAM_PROFILE_PAGE_URL,
        templateUrl: ROUTES.STEAM_PROFILE_PAGE_TEMPLATE
    });
    /*Страница со списком всех значков*/
    $stateProvider.state(ROUTES.STEAM_BADGES_PAGE_URL, {
        url: ROUTES.STEAM_BADGES_PAGE_URL,
        templateUrl: ROUTES.STEAM_BADGES_PAGE_TEMPLATE
    });
    /*Страница значка*/
    $stateProvider.state(ROUTES.STEAM_BADGE_PAGE_URL, {
        url: ROUTES.STEAM_BADGE_PAGE_URL,
        templateUrl: ROUTES.STEAM_BADGE_PAGE_TEMPLATE
    });
    /*Страница с информацией о расширении*/
    $stateProvider.state(ROUTES.EXTENSION_ABOUT_PAGE_URL, {
        url: ROUTES.EXTENSION_ABOUT_PAGE_URL,
        templateUrl: ROUTES.EXTENSION_ABOUT_PAGE_TEMPLATE
    });
    /*Страница со списком руководств*/
    $stateProvider.state(ROUTES.STEAM_GUIDES_PAGE_URL, {
        url: ROUTES.STEAM_GUIDES_PAGE_URL,
        templateUrl: ROUTES.STEAM_GUIDES_PAGE_TEMPLATE
    });
    /*Страница со списком руководств*/
    $stateProvider.state(ROUTES.STEAM_INVENTORY_PAGE_URL, {
        url: ROUTES.STEAM_INVENTORY_PAGE_URL,
        templateUrl: ROUTES.STEAM_INVENTORY_PAGE_TEMPLATE
    });
});

app.controller("CommonController", function ($scope, $rootScope, $mdDialog, ROUTES, OPTIONS, SCREENSHOTS, DEMONSTRATIONS) {
    $scope.items = menuCommonItemList;
    $scope.getURL = function (url) {
        return '/html/options.html#' + ROUTES[url];
    };

    $scope.idSelectedItem = 'steam-pages#common'; // переменная для текущей выбранной страницы
    $scope.setSelected = function (idSelectedItem) {
        $scope.idSelectedItem = idSelectedItem;
    };


    $rootScope.data = {};
    $rootScope.options = OPTIONS;
    $rootScope.image = "";
    $rootScope.screenshots = SCREENSHOTS;
    $rootScope.demonstrations = DEMONSTRATIONS;

    $rootScope.setToLocalStorage = function (name, defaultValue) {
        if (defaultValue) {
            if ($rootScope.data[name] == "") {
                $rootScope.data[name] = defaultValue;
            }
        }
        localStorage[name] = $rootScope.data[name];
    };

    $rootScope.getFromLocalStorage = function (name) {
        if (localStorage[name] == null) {
            return "";
        }
        return localStorage[name];
    };
    $rootScope.getBooleanFromLocalStorage = function (name) {
        if (localStorage[name] == null) {
            return false;
        }
        return "true" == localStorage[name];
    };
    $rootScope.initTextModelItem = function (optionName, localScope) {
        localScope.data[optionName] = $scope.getFromLocalStorage(optionName);
    };
    $rootScope.initBooleanModelItem = function (optionName, localScope) {
        localScope.data[optionName] = $scope.getBooleanFromLocalStorage(optionName);
    };
    $rootScope.showScreenshot = function (event, imagePath) {
        $mdDialog.show({
            template: '<md-dialog aria-label=""> <md-content> <img src="' + imagePath + '"> </md-content> </md-dialog>',
            targetEvent: event
        })
    };
});

app.controller("CommonSteamPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_STORE_FOOTER_TOP_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_STORE_FOOTER_BOTTOM_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_FOOTER_LOGO_FIX, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_LANGUAGE_LIST_SIMPLIFY, $scope);
    $scope.initBooleanModelItem($scope.options.COMMON_PAGE_SUPPORT_TRANSLATE_STEAM_HIDE, $scope);
});

app.controller("MainSteamPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.MAIN_STORE_PAGE_FLOAT_CENTER, $scope);
    $scope.initBooleanModelItem($scope.options.MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK, $scope);
    $scope.initBooleanModelItem($scope.options.MAIN_PAGE_HIDE_BROWSE_BY_RECOMMENDED_BLOCK, $scope);
    $scope.initBooleanModelItem($scope.options.MAIN_PAGE_HIDE_EXPLORE_BLOCK, $scope);
    $scope.initBooleanModelItem($scope.options.MAIN_PAGE_HIDE_CURATORS_BLOCK, $scope);
    $scope.initBooleanModelItem($scope.options.MAIN_PAGE_REMOVE_ENDLESS_FOOTER, $scope);
});

app.controller("SteamAppPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.APP_PAGE_BLOCKS_EXPAND, $scope);
    $scope.initBooleanModelItem($scope.options.APP_PAGE_MARK_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.APP_PAGE_MAKE_REVIEW_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.APP_PAGE_CURATORS_BLOCK_HIDE, $scope);
});

app.controller("SteamAccountPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_FIX_FOOTER, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_FAMILY_SHARING_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_TAXES_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_EMAIL_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_FAMILY_VIEWING_BLOCK_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_STORE_STATISTIC_BLOCK_SHOW, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_IN_GAME_STATISTIC_BLOCK_SHOW, $scope);
    $scope.initBooleanModelItem($scope.options.ACCOUNT_PAGE_COMMUNITY_MARKET_STATISTIC_BLOCK_SHOW, $scope);
});

app.controller("SteamBadgesPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.BADGES_PAGE_REMAINING_DROP_LABEL_SHOW, $scope);
    $scope.initBooleanModelItem($scope.options.BADGES_PAGE_HEADER_SUPPORT_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGES_PAGE_HOW_GET_MORE_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGES_PAGE_PLAY_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGES_PAGE_HOURS_IN_GAME_LABEL_HIDE, $scope);
});

app.controller("SteamBadgePageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_STEAMCARDEXCHANGE_LINK_SHOW, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_SET_IN_PROFILE_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_HOW_GET_MORE_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_MORE_GAMESCARDS_SET_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_PLAY_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_HOURS_IN_GAME_LABEL_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_TRADING_FORUM_BUTTON_HIDE, $scope);
    $scope.initBooleanModelItem($scope.options.BADGE_PAGE_FRIENDS_WITH_THIS_BADGE_BLOCK_HIDE, $scope);
});

app.controller("SteamGuidesPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_HEADER_SHOW_MAKE_GUIDE_BUTTON, $scope);
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_HEADER_HIDE_SUBTITLE, $scope);
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_LIST_ITEM_REAL_LINK, $scope);
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_LIST_ITEM_HIDE_RATING, $scope);
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_LIST_ITEM_HIDE_TITLE_UNDERLINE, $scope);
    $scope.initBooleanModelItem($scope.options.GUIDES_PAGE_LIST_ITEM_HIDE_AUTHOR, $scope);
});

app.controller("InventoryGuidesPageController", function ($scope) {
    $scope.initBooleanModelItem($scope.options.INVENTORY_PAGE_HIDE_GAMES_TAB, $scope);
    $scope.initTextModelItem($scope.options.INVENTORY_PAGE_HIDE_GAMES_TAB_WHITE_LIST, $scope);
    $scope.initBooleanModelItem($scope.options.INVENTORY_PAGE_HIDE_LOGO, $scope);
    $scope.initBooleanModelItem($scope.options.INVENTORY_PAGE_HIDE_FILTER, $scope);
});