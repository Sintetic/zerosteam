function setDefaultStorage() {
    if (localStorage["isDefaultStorageExist"] == null) {
        localStorage["isDefaultStorageExist"] = true;
        localStorage["updateInterval"] = 60;
        localStorage["useOnBadgesPage"] = true;
        localStorage["useOnGuidePageEngine"] = false;
        localStorage["commonShowLabelNewMenuItem"] = true;
        localStorage["mainStorePageShowHeaderButtonDownload"] = true;
        localStorage["mainStorePageShowRealItemStoreBlock"] = true;
        localStorage["mainStorePageShowRSSAndOtherBlock"] = true;
        localStorage["mainStorePageShowVKItemInRSSAndOtherBlock"] = true;
        localStorage["mainStorePageShowGiftBlock"] = true;
        localStorage["mainGameCardsCheckbox"] = true;
        localStorage["appPageTryGetPriceFromSteamBuy"] = false;
    }
}
