$(document).ready(function() {

    //counter order in shopping basket from index.html(home page) and menu.html(menu page)
    $('.order').click(function () {
        $('.header_top_counter_buy').css({'display': 'flex'});
        var $counter = $(".header_top_counter_buy");
        $counter.text(+$counter.text() + 1);
        console.log($counter.text)
    });

})