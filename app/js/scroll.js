
// scroll indicator at index.html (home page)


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


// Cache selectors
var lastId,
    topMenu = $("#scroll"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});



