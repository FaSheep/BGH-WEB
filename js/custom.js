jQuery(document).ready(function ($) {


    /************** Scroll Navigation *********************/
    $('.navigation').singlePageNav({
        currentClass: 'active'
    });


    /************** FlexSlider *********************/
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
    });


    /************** Responsive Navigation *********************/

    $('.menu-toggle-btn').click(function () {
        $('.responsive-menu').stop(true, true).slideToggle();
    });


});

var dLink = "http://" + window.location.host + "/download/BGH_v1.1.apk";
var aLink = "http://" + window.location.host + "/app.html";
var linkD = document.getElementsByClassName("downloadLink");
var linkA = document.getElementsByClassName("appLink");
for (const element of linkD) {
    element.setAttribute("href", dLink);
}
for (const element of linkA) {
    element.setAttribute("href", aLink);
}