chrome.extension.sendRequest({method: "getLocalStorage", key: "badgesPageCheckbox"}, function(response) {
    console.log(response.data);
    if (response.data == 'true')
    {
        var result = 0;
        jQuery('.progress_info_bold').each(function (key, val) {
            result += parseInt(jQuery(val).html().match(/\d+$/), 10);
        });
        console.log(result);
        jQuery('.profile_badges_header_title').append("<div id='test' style=' text-align: left; color:#FFFFFF; font-size: 12px;'> Еще выпадет карточек: " + result + "</div>")
    }
});