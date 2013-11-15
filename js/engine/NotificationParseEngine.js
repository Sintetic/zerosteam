/*Проверка новых уведомлений с сервера Steam
 * void
 * */
function checkNotification(request_source) {
    $.ajax({
        async: true, //при false - тормозит открытие плашки
        cache: false,
        data: null,
        dataType: 'html',
        type: 'post',
        url: 'http://store.steampowered.com/',
        success: function (data) {
            var page = $(data).find('div#header_notification_link'); //получение кнопки вызова меню
            if (page.length == 0) { //авторизации нет
                $('.menu.notAuthorized').show();
                $('.menu.authorized').hide();
                setNotificationIcon('error', '?');
            } else { //авторизация есть
                if (!isNaN(parseInt(page.text(), 10))) { //есть новые уведомления
                    var total_notification = parseInt(page.text(), 10);
                } else { //нет новых уведомнений
                    var total_notification = 0;
                }
                setNotificationIcon('success', total_notification.toString());
                //обновление значений в меню плагина (передается DOM-блок с пунктами меню Steam)
                if (request_source == 'popup') {
                    setNotification($(data).find('div#header_notification_dropdown'));
                }
            }
        },
        error: function () {
            setNotificationIcon('processing', '?');
        }
    });
}
/*Обновление текста на иконке плагина
 * void
 * status - статус (для установки соответствующей цветовой схемы)
 * value - отображаемый текст
 * */
function setNotificationIcon(status, value) {
    var setColor = chrome.browserAction.setBadgeBackgroundColor;
    var setText = chrome.browserAction.setBadgeText;
    switch (status) {
        case 'success':
            setColor({ color: [0, 100, 0, 255] });
            break;
        case 'processing':
            setColor({ color: [0, 100, 0, 100] });
            break;
        case 'error':
            setColor({ color: [255, 0, 0, 255] });
            break;
        default:
    }
    setText({text: value});
}

/*Обновление числовых значений в меню плагина
 * void
 * source - DOM-блок с пунктами меню Steam
 * */
function setNotification(source) {
    $(source).find('.popup_menu_item').each(function (itemKey, item) { //обход всех пунктов меню Steam
        var item = {
            'name': $(item).attr('class').split('_').slice(-1)[0].replace(' ', ''), //для идентификации пункта меню
            'link': $(item).attr('href'), //URI на соответствующую страницу
            'value': parseInt($(item).text().split(': ')[1], 10) //количество обновлений
        }
        if (item.name === 'offlinemessages') { //индивидуальная обработка сообщений
            $('.menu .messages span').text(item.value);
        } else { //остальные пункты меню обрабатываются этим конвеером
            $('.menu .' + item.name).attr('href', item.link).find('span').text(item.value);
        }
    });
}