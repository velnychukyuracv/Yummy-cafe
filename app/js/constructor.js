
$(document).ready(function() {


//Buttons pills in constructor.html

    /*toggle button pills*/
    $(".constructor_wrapper_section_built_ingredients_block").click(function() {
        $(".constructor_wrapper_section_built_ingredients_block").removeClass('active');
        $(this).addClass('active');
        if ($(this).data('target') == 'bulka') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        } else if ($(this).data('target') == 'sauce') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'salad') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'cutlet') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'cheese') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'vegetables') {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }else  {
            $('.info_ingredients').removeClass('active');
            $('.info_ingredients.' + $(this).data('target')).addClass('active');
        }
    });



})