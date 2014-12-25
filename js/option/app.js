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
    COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD: "COMMON_PAGE_HEADER_HIDE_BUTTON_DOWNLOAD", // Скрыть кнопку «Установить Steam»
    COMMON_PAGE_HEADER_FLOAT_LEFT: "COMMON_PAGE_HEADER_FLOAT_LEFT", // Выровнять блок по левому краю
    COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST: "COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST", // Убрать пункт "Посмотреть профиль" из выпадающего меню
    APP_PAGE_MAKE_REVIEW_BLOCK_HIDE: "APP_PAGE_MAKE_REVIEW_BLOCK_HIDE" // Убрать блок "Написать обзор"
});

app.constant('SCREENSHOTS', {
    MAIN_PAGE_HEADER_RIGHT_BLOCK: "../img/screenshot/main_page_header_right_block.png",
    APP_PAGE_MAKE_REVIEW_BLOCK: "../img/screenshot/app_page_make_review_block.png"
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

app.controller("CommonController", function ($scope, $rootScope, $mdDialog, ROUTES, OPTIONS, SCREENSHOTS) {
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
    $scope.initModelItem($scope.options.COMMON_PAGE_HEADER_FLOAT_LEFT, $scope);
    $scope.initModelItem($scope.options.COMMON_PAGE_HEADER_REMOVE_VIEW_PROFILE_IN_DROPDONW_LIST, $scope);
});

app.controller("SteamAppPageController", function ($scope) {
    $scope.initModelItem($scope.options.APP_PAGE_MAKE_REVIEW_BLOCK_HIDE, $scope);
});