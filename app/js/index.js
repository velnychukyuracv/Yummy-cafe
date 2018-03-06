
$(document).ready(function() {

// Fixed top header navigation scroll events
   /* $(window).scroll(function(){
        if($(window).scrollTop()) {
            $('.header_top').css({ position:'fixed'});
        } else{
            $('.header_top').css({ position:'relative'});
        }
    });*/





// slider slick

    //header slider at index.html(home page) and menu.html(menu page)
    $('.header_body_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    //about section at index.html(home page) slider
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

    //banner posts at index.html(home page) slider
    $('.banner_post_slider').slick({
        arrows: false,
        dots: true,
    });


//Buttons pills in menu at index.html(home page) and menu.html(menu page)

    /*default active*/
    $('.menu_wrapper_burgers_slider').addClass('active');

    /*toggle button pills*/
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


//popup fresh ingredients open at index.html(home page)

    /*meat popup*/
    $('.perfection_wrapper_meat_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $('.perfection_wrapper_meat_line').toggle( "slow");
        $('.perfection_wrapper_meat_description').toggle( "slow" );
    });

    /*cheese popup*/
    $('.perfection_wrapper_cheese_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $(this).css({'marginTop':'20%'});
        $('.perfection_wrapper_cheese_line').toggle( "slow");
        $('.perfection_wrapper_cheese_description').toggle( "slow" );
    });

    /*salad popup*/
    $('.perfection_wrapper_salad_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $('.perfection_wrapper_salad_line').toggle( "slow");
        $('.perfection_wrapper_salad_description').toggle( "slow" );
    });

    /*tomato popup*/
    $('.perfection_wrapper_tomato_button').click(function() {
        $(this).toggleClass('perfection_wrapper_button_active');
        $(this).css({'marginTop':'18%'});
        $('.perfection_wrapper_tomato_line').toggle( "slow");
        $('.perfection_wrapper_tomato_description').toggle( "slow" );
    });


//counter section at index.html(home page)
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


//ajax load social content from reviews.html to index.html(home page)
    $('.social_load_more').click(function(){
         $('#social_wrapper').load('../reviews.html');
         $('.social_load_more').css({ display: 'none'});
    });


});


