/**
 * Created with IntelliJ IDEA.
 * User: Wolf
 * Date: 24.10.13
 * Time: 15:15
 * To change this template use File | Settings | File Templates.
 */
function content_badges_main() {
    var result = 0;
    jQuery('.progress_info_bold').each(function (key, val) {
        result += parseInt(jQuery(val).html().match(/\d+$/), 10);
    });
    console.log(result);
    jQuery('.profile_badges_header_title').append("<div id='test' style=' text-align: left; color:#FFFFFF; font-size: 12px;'> Еще осталось выбить карт: " + result + "</div>")
}

content_badges_main();