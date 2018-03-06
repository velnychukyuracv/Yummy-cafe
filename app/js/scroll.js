
// scroll indicator at index.html (home page)

var topHeader = $('header').offsetTop;
console.log(topHeader);
var    topAbout = $('#about').offsetTop;
console.log(topAbout);
var    topMenu = $('#menu').offsetTop;
console.log(topMenu);
var    topBanner = $('#banner_post').offsetTop;
console.log(topBanner);
var    topPerfection = $('#perfection').offsetTop;
console.log(topPerfection);
var    topCounter = $('#counter').offsetTop;
console.log(topCounter);
var    topSocial = $('#social').offsetTop;
console.log(topSocial);
var   topFooter = $('footer').offsetTop;
console.log(topFooter);

document.body.onscroll = function () {
    var scr =  window.pageYOffset || document.documentElement.scrollTop;
    console.log(scr);
    if (scr >= topHeader) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_header').addClass('active');
    } else if (scr >= topAbout) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_about').addClass('active');
    } else if (scr >= topMenu) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_menu').addClass('active');
    } else if (scr >= topBanner) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_banner').addClass('active');
    }else if (scr >= topPerfection) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_perfection').addClass('active');
    } else if (scr >= topCounter) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_counter').addClass('active');
    } else if (scr >= topSocial) {
        $('.scroll_main_circle').removeClass('active');
        $('.circle_social').addClass('active');
    }else  if (scr >= topFooter){
        $('.scroll_main_circle').removeClass('active');
        $('.circle_footer').addClass('active');
    }
};

$('.circle_header ').click(function(){
    $('html, body').animate({scrollTop:$('header').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_header').addClass('active');
});
$('.circle_about').click(function(){
    $('html, body').animate({scrollTop:$('#about').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_about').addClass('active');
});
$('.circle_menu ').click(function(){
    $('html, body').animate({scrollTop:$('#menu').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_menu').addClass('active');
});
$('.circle_banner').click(function(){
    $('html, body').animate({scrollTop:$('#banner_post').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_banner').addClass('active');
});
$('.circle_perfection').click(function(){
    $('html, body').animate({scrollTop:$('#perfection').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_perfection').addClass('active');
});
$('.circle_counter').click(function(){
    $('html, body').animate({scrollTop:$('#counter').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_counter').addClass('active');
});
$('.circle_social').click(function(){
    $('html, body').animate({scrollTop:$('#social').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_social').addClass('active');
});
$('.circle_footer ').click(function(){
    $('html, body').animate({scrollTop:$('footer').position().top}, 1500);
    $('.scroll_main_circle').removeClass('active');
    $('.circle_footer').addClass('active');
});
