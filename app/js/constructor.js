
$(document).ready(function() {


//Buttons pills in constructor.html

    /*toggle button pills*/
    $(".constructor_wrapper_section_built_ingredients_block").click(function() {

        $(".constructor_wrapper_section_built_ingredients_block").removeClass('active');
        $(this).addClass('active');
        if ($(this).data('target') == 'bulka_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        } else if ($(this).data('target') == 'sauce_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'salad_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'cutlet_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'cheese_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }else if ($(this).data('target') == 'vegetables_block') {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }else  {
            $('.constructor_wrapper_section_built_description_info').removeClass('active');
            $('.constructor_wrapper_section_built_description_info.' + $(this).data('target')).addClass('active');
        }
    });


    $('.add_white_bulka').click(function() {
        $( ".constructor_wrapper_section_built_description_info > ul > li > .info_white_bulka").clone().appendTo( ".constructor_wrapper_section_total_ingredients");
        $('.white_bulka_top').show(400);
        $('.white_bulka_down').show(400);
        $('.black_bulka_top').hide();
        $('.black_bulka_down').hide();
    });
    $('.add_black_bulka').click(function() {
        $( ".constructor_wrapper_section_built_description_info > ul > li > .info_black_bulka").clone().appendTo( ".constructor_wrapper_section_total_ingredients");
        $('.black_bulka_top').show(400);
        $('.black_bulka_down').show(400);
        $('.white_bulka_top').hide();
        $('.white_bulka_down').hide();
    });

            



    function consruct(i) {
        count = 0
        $('.add_' + i).click(function () {
            count++
            console.log(count);
            $(".constructor_wrapper_section_built_description_info > ul > li > .img_" + i).clone().appendTo(".constructor_wrapper_section_show_ingredients");
            $(".constructor_wrapper_section_built_description_info > ul > li > .info_" + i).clone().appendTo(".constructor_wrapper_section_total_ingredients");

            $(".constructor_wrapper_section_total_ingredients > .info_" + i + "> h6").append('<input>');
            $(".constructor_wrapper_section_total_ingredients > .info_" + i + "> h6 > input").addClass('total_delete_button');
            $(".constructor_wrapper_section_total_ingredients > .info_" + i + "> h6 > .total_delete_button").attr("value","+");
            $(".constructor_wrapper_section_total_ingredients > .info_" + i + "> h6 > .total_delete_button").attr("type","button");
            $(".constructor_wrapper_section_total_ingredients > .info_" + i + "> h6 > .total_delete_button").attr("name","delete_ingredient");


            $(".total_delete_button").click(function () {
                console.log('del');
                $(".constructor_wrapper_section_show_ingredients > .img_" + i).remove();
                $(".constructor_wrapper_section_total_ingredients > .info_" + i).remove();
            });
        });
    }

    consruct('grenki');
    consruct('blue_chies_sauce');
    consruct('cheese_sauce');
    consruct('cherry_sauce');
    consruct('garlic_sauce');
    consruct('ketchup_sauce');
    consruct('mushroom_sauce');
    consruct('mustard_honey_sauce');
    consruct('salsa_sauce');
    consruct('spicy_sauce');
    consruct('iceberg_salad');
    consruct('romen_salad');
    consruct('chicken_cutlet');
    consruct('beef_cutlet');
    consruct('pork_cutlet');
    consruct('oatmeal_cutlet');
    consruct('crab_cutlet');
    consruct('bacon');
    consruct('dorblu_cheese');
    consruct('cheddar_cheese');
    consruct('mazdam_cheese');
    consruct('tomato');
    consruct('cucumbers_fresh');
    consruct('cucumbers_pickled');
    consruct('pepper');
    consruct('caramelized_onion');
    consruct('fried_onion');
    consruct('pickled_onion');
    consruct('egg');
    consruct('pineapple');





})