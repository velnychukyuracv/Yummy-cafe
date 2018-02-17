//slick слайдер
$(document).ready(function() {

//slick слайдер
    //header
    $('.sl').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //about
    $('.about_wrapper_right_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        asNavFor: '.about_wrapper_right_down_slider',
    });
    $('.about_wrapper_right_down_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        asNavFor: '.about_wrapper_right_slider',
    });

    //banner posts
    $('.banner_post_slider').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


//Buttons pills
    $('.menu_wrapper_burgers_slider').addClass('active');

    $(".menu_wrapper_buttons_button").click(function() {
        $(".menu_wrapper_buttons_button").removeClass('active');
        $(this).addClass('active');
        if ($(this).data('target') == 'burgers') {
            $('.menu.active').removeClass('active');
            $('.menu.' + $(this).data('target')).addClass('active');
        } else if ($(this).data('target') == 'potato') {
            $('.menu.active').removeClass('active');
            $('.menu.' + $(this).data('target')).addClass('active');
        }else {
            $('.menu.active').removeClass('active');
            $('.menu.' + $(this).data('target')).addClass('active');
        }
    });


//counter
    var div_top = $('.perfection').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > div_top){
            $('.counter_wrapper_counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },

                    {
                        duration: 8000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });



            });
        }
    });


// Fixed top header navigation scroll events
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('#header_top_navigation').css({ padding: '2% 5% 1%', background:'#ffa726', position:'fixed'});
            $('.header_body_slider').css({ paddingTop: '6%'});
        } else{
            $('#header_top_navigation').css('background','transparent');
        }
    });


})