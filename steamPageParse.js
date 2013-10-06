function checkNotification() {
    $.ajax({
        async: false,
        cache: false,
        data: null,
        dataType: 'html',
        type: 'post',
        url: 'http://store.steampowered.com/',
        success: function (data) {
            console.log('ЫВОАРЫДЛВОАР ', $(data).find('div[id=header_notification_link]'));
            if ($(data).find('div[id=header_notification_link]').length == 0) {
                $('#header_notification_dropdown').hide();
                $('#authentication_link').show();
                setNotificationIcon('?', 'error');
            } else {
                var total_notification = 0;
                if (!isNaN(parseInt($(data).find('div[id=header_notification_link]').text(), 10))) {
                    total_notification = parseInt($(data).find('div[id=header_notification_link]').text());
                }
                setNotificationIcon(total_notification.toString(), 'success');
                setNotification($(data).find('div[id=header_notification_dropdown]'));
            }
        },
        error: function () {
            setTimeout(checkNotification, 10 * 1000);
        }
    });
}

function setNotificationIcon(value, status) {
    switch (status) {
        case 'success':
            chrome.browserAction.setBadgeBackgroundColor({ color: [0, 100, 0, 255] });
            break;
        case 'processing':
            chrome.browserAction.setBadgeBackgroundColor({ color: [0, 100, 0, 100] });
            break;
        case 'error':
            chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
            break;
        default:
            break;
    }

    chrome.browserAction.setBadgeText({text: value});
}

function setNotification(notification_dropdown) {
    $('.note_comments').text(notification_dropdown.find('a.header_notification_comments]').text());
    $('.note_comments').attr('href', notification_dropdown.find('a.header_notification_comments]').attr('href'));

    $('.note_items').text(notification_dropdown.find('a.header_notification_items]').text());
    $('.note_items').attr('href', notification_dropdown.find('a.header_notification_items]').attr('href'));

    $('.note_invites').text(notification_dropdown.find('a.header_notification_invites]').text());
    $('.note_invites').attr('href', notification_dropdown.find('a.header_notification_invites]').attr('href'));

    $('.note_gifts').text(notification_dropdown.find('a[class*=header_notification_gifts]').text());
    $('.note_gifts').attr('href', notification_dropdown.find('a[class*=header_notification_gifts]').attr('href'));

    $('.note_messages').text(notification_dropdown.find('a[class*=header_notification_offlinemessage]').text());
}

$(document).ready(function () {
    setNotificationIcon('?', 'processing');
    checkNotification();
});