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

    STEAM_PROFILE_PAGE_URL: "/steam/profile",
    STEAM_PROFILE_PAGE_TEMPLATE: "../html/pages/steam_profile.html",

    EXTENSION_ABOUT_PAGE_URL: "/steam/about",
    EXTENSION_ABOUT_PAGE_TEMPLATE: "../html/pages/extension-about.html"
});

app.constant('OPTIONS', {
    COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD: "COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD",
    COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST: "COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST",
    COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT: "COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT",
    COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT: "COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT",
    MAIN_PAGE_HEADER_FLOAT_RIGHT: "MAIN_PAGE_HEADER_FLOAT_RIGHT",
    MAIN_PAGE_GLOBAL_MENU_FLOAT_RIGHT: "MAIN_PAGE_GLOBAL_MENU_FLOAT_RIGHT",
    MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK: "MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK",
    APP_PAGE_BLOCKS_EXPAND: "APP_PAGE_BLOCKS_EXPAND",
    APP_PAGE_MARK_BLOCK_HIDE: "APP_PAGE_MARK_BLOCK_HIDE",
    APP_PAGE_MAKE_REVIEW_BLOCK_HIDE: "APP_PAGE_MAKE_REVIEW_BLOCK_HIDE",
    APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE: "APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE",
    APP_PAGE_CURATORS_BLOCK_HIDE: "APP_PAGE_CURATORS_BLOCK_HIDE"
});

app.constant('SCREENSHOTS', {
    COMMON_PAGE_GLOBAL_MENU: "../img/screenshot/global_menu.png",
    MAIN_PAGE_HEADER_RIGHT_BLOCK: "../img/screenshot/main_page_header_right_block.png",
    MAIN_PAGE_BROWSE_BY_GENRE_BLOCK: "../img/screenshot/browse_by_genre_block.png",
    APP_PAGE_MARK_BLOCK: "../img/screenshot/app_page_mark_block.png",
    APP_PAGE_MAKE_REVIEW_BLOCK: "../img/screenshot/app_page_make_review_block.png",
    APP_PAGE_SHARE_AND_ABUSE_BLOCK: "../img/screenshot/app_page_share_and_abuse_block.png",
    APP_PAGE_CURATORS_BLOCK: "../img/screenshot/app_page_curators_block.png"
});

app.constant('DEMONSTRATIONS', {
    MAIN_PAGE_HEADER_FLOAT_RIGHT: "../img/demonstration/main_page_header_float_right.png",
    MAIN_PAGE_GLOBAL_MENU_FLOAT_RIGHT: "../img/demonstration/main_page_global_menu_float_right.png"
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
    /*Страница профиля*/
    $stateProvider.state(ROUTES.STEAM_PROFILE_PAGE_URL, {
        url: ROUTES.STEAM_PROFILE_PAGE_URL,
        templateUrl: ROUTES.STEAM_PROFILE_PAGE_TEMPLATE
    });
    /*Страница с информацией о расширении*/
    $stateProvider.state(ROUTES.EXTENSION_ABOUT_PAGE_URL, {
        url: ROUTES.EXTENSION_ABOUT_PAGE_URL,
        templateUrl: ROUTES.EXTENSION_ABOUT_PAGE_TEMPLATE
    });
});

app.controller("CommonController", function ($scope, $rootScope, $mdDialog, ROUTES, OPTIONS, SCREENSHOTS, DEMONSTRATIONS) {
    $scope.items = menuCommonItemList;
    $scope.getURL = function (url) {
        return '/html/setting.html#' + ROUTES[url];
    };

    $scope.idSelectedItem = null;
    $scope.setSelected = function (idSelectedItem) {
        $scope.idSelectedItem = idSelectedItem;
    };


    $rootScope.data = {};
    $rootScope.options = OPTIONS;
    $rootScope.image = "";
    $rootScope.screenshots = SCREENSHOTS;
    $rootScope.demonstrations = DEMONSTRATIONS;
    $rootScope.setToLocalStorage = function (name) {
        localStorage[name] = $rootScope.data[name];
    };
    $rootScope.getFromLocalStorage = function (name) {
        if (localStorage[name] == null) {
            return false;
        }
        return "true" == localStorage[name];
    };
    $rootScope.initModelItem = function (optionName, localScope) {
        localScope.data[optionName] = $scope.getFromLocalStorage(optionName);
    };
    $rootScope.showScreenshot = function (event, imagePath) {
        $mdDialog.show({
            template: '<md-dialog aria-label=""> <md-content> <img src="' + imagePath + '"> </md-content> </md-dialog>',
            targetEvent: event
        })
    };

});

app.controller("CommonSteamPageController", function ($scope) {
    $scope.initModelItem($scope.options.COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD, $scope);
    $scope.initModelItem($scope.options.COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST, $scope);
    $scope.initModelItem($scope.options.COMMON_PAGE_GLOBAL_MENU_HIDE_ABOUT, $scope);
    $scope.initModelItem($scope.options.COMMON_PAGE_GLOBAL_MENU_HIDE_SUPPORT, $scope);
});

app.controller("MainSteamPageController", function ($scope) {
    $scope.initModelItem($scope.options.MAIN_PAGE_HEADER_FLOAT_RIGHT, $scope);
    $scope.initModelItem($scope.options.MAIN_PAGE_HIDE_BROWSE_BY_GENRE_BLOCK, $scope);
    $scope.initModelItem($scope.options.MAIN_PAGE_GLOBAL_MENU_FLOAT_RIGHT, $scope);
});

app.controller("SteamAppPageController", function ($scope) {
    $scope.initModelItem($scope.options.APP_PAGE_BLOCKS_EXPAND, $scope);
    $scope.initModelItem($scope.options.APP_PAGE_MARK_BLOCK_HIDE, $scope);
    $scope.initModelItem($scope.options.APP_PAGE_MAKE_REVIEW_BLOCK_HIDE, $scope);
    $scope.initModelItem($scope.options.APP_PAGE_SHARE_AND_ABUSE_BLOCK_HIDE, $scope);
    $scope.initModelItem($scope.options.APP_PAGE_CURATORS_BLOCK_HIDE, $scope);
});