/**
 * Created with IntelliJ IDEA.
 * User: Wolf
 * Date: 24.10.13
 * Time: 15:32
 * To change this template use File | Settings | File Templates.
 */



var s = document.createElement('script');
s.src = chrome.extension.getURL("/content_badges.js");
s.onload = function() {
    this.parentNode.removeChild(this);

};
(document.head||document.documentElement).appendChild(s);
