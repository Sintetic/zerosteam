// Saves options to localStorage.
function saveOptions() {
    var select = $("#interval");
    var interval = select.val();
    localStorage["update_interval"] = interval;

    // Update status to let user know options were saved.
    var status = $("#status");
    var current_value = $("#current_value");
    status.html("Настройки сохранены");
    setTimeout(function () {
        status.html("");
        current_value.html("Текущее значение = " + localStorage["update_interval"]);
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restoreOptions() {
    $('#interval').find('option').each(function () {
        if ($(this).attr('value') == localStorage['update_interval']) {
            $(this).attr('selected', 'true');
        }
    });
}

$(document).ready(function () {
    restoreOptions();
    $('#save').bind('click', saveOptions);
});