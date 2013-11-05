// Saves options to localStorage.
function getBoolean(string) {
    return string == "true";
}

function saveOptions() {
    localStorage["updateInterval"] = $("#interval").val();
    localStorage["useOnBadgesPage"] = $("#badgesPageCheckbox").prop('checked');
    localStorage["useOnGuidePageEngine"] = $("#guidesPageCheckbox").prop('checked');

    // Update status to let user know options were saved.
    var status = $("#status");
    var current_value = $("#current_value");
    status.html("Настройки сохранены");
    setTimeout(function () {
        status.html("");
        current_value.html("Текущее значение = " + localStorage["updateInterval"]);
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restoreOptions() {
    $('#interval').find('option').each(function () {
        if ($(this).attr('value') == localStorage['updateInterval']) {
            $(this).attr('selected', 'true');
        }
    });
    $("#badgesPageCheckbox").prop('checked', getBoolean(localStorage["useOnBadgesPage"]));
    $("#guidesPageCheckbox").prop('checked', getBoolean(localStorage["useOnGuidePageEngine"]));
}

$(document).ready(function () {
    setTimeout(restoreOptions, 100);
    $('#save').bind('click', saveOptions);
});