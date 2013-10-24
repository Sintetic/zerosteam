/**
 * Created with IntelliJ IDEA.
 * User: Wolf
 * Date: 24.10.13
 * Time: 17:01
 * To change this template use File | Settings | File Templates.
 */
function content_guides_main() {
    jQuery('.workshopItemCollectionContainer').each(function () {
        var link = jQuery(this).find('div[class=workshopItemCollection]').attr('onclick').split('href=')[1];
        var old_inner_html = jQuery(this).html();
        jQuery(this).html('<a href=' + link + ' target="_blank">' + old_inner_html + '</a>');
        jQuery(this).find('div[class=workshopItemCollection]').attr('onclick', '');
    });
}
content_guides_main();
