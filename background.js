/*Данный код будет выполняться сразу после запуска браузера*/
function backgroundCheckNotification() {
    checkNotification('background');
}

$(document).ready(function () {
    setNotificationIcon('processing', '?');
    backgroundCheckNotification();
    setInterval(backgroundCheckNotification, 60 * 1000); //todo разобраться почему не работает с анонимной функцией
});