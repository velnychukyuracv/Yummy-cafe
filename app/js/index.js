//slick слайдер
$(document).ready(function() {

// Fixed top header navigation scroll events
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('#header_top_navigation').css({ padding: '2% 5% 1.74%',backgroundImage: 'url("../img/bg-header.png")',  position:'fixed'});
            $('.header_body_slider').css({ paddingTop: '6%'});
        } else{
            $('#header_top_navigation').css('background','transparent');
        }
    });


//slick слайдер
    //header слайдер
    $('.sl').slick({
        autoplay: true,
        autoplaySpeed: 3000,
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

    //about слайдер
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

    //banner posts слайдер
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


//Buttons pills in menu
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


//fresh ingredients open popup
    $('.perfection_wrapper_meat_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $('.perfection_wrapper_meat_line').toggle( "slow");
        $('.perfection_wrapper_meat_description').toggle( "slow" );
    });

    $('.perfection_wrapper_cheese_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $(this).css({'marginTop':'20%'});
        $('.perfection_wrapper_cheese_line').toggle( "slow");
        $('.perfection_wrapper_cheese_description').toggle( "slow" );
    });

    $('.perfection_wrapper_salad_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $('.perfection_wrapper_salad_line').toggle( "slow");
        $('.perfection_wrapper_salad_description').toggle( "slow" );
    });

    $('.perfection_wrapper_tomato_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $(this).css({'marginTop':'18%'});
        $('.perfection_wrapper_tomato_line').toggle( "slow");
        $('.perfection_wrapper_tomato_description').toggle( "slow" );
    });


//counter section
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


//counter in shopping cart
    $('.order').click(function() {
         $('.header_top_counter_buy').css({'display':'flex'});
        var $counter = $(".header_top_counter_buy");
        $counter.text(+$counter.text() + 1);
        console.log($counter.text)
    });


//ajax load social content
    $('.social_load_more').click(function(){
        $('#social_wrapper').load('../ajax.html');
    })


})