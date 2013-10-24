function inceptionJavaScriptCode(script_name) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(script_name);
    script.onload = function () {
        this.parentNode.removeChild(this);

    };
    (document.head || document.documentElement).appendChild(script);
}
