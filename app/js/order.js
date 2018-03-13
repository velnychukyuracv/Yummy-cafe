$(document).ready(function() {

//counter of shopping basket order goods quantity

    /*plus counter*/
    function plus(i){
        var $input = $('.shopping_order_goods_quantity_value_'+i);

        $('.shopping_order_goods_quantity_plus_'+i).click(function () {

            $input.val(parseInt($input.val()) + 1);
            $input.change();

            var totalPrice = +$('.shopping_order_goods_total_value_'+i).text(),
                orderPrice = +$('.shopping_order_goods_price_position_'+i).text(),
                newPrice = totalPrice + orderPrice;
            $('.shopping_order_goods_total_value_'+i).text(newPrice.toFixed(2));

            if (+$input.val() > 0) {
                console.log('true')
                $('.shopping_order_goods_quantity_minus_'+i).attr('disabled', false);
            }


            var totalPrice1 = +$('.shopping_order_goods_total_value_1').text();
            var totalPrice2 = +$('.shopping_order_goods_total_value_2').text();
            var totalPrice3 = +$('.shopping_order_goods_total_value_3').text();
            newPrice = totalPrice1 + totalPrice2 + totalPrice3;
            $('.shopping_total_order').text(newPrice.toFixed(2));

            return false;
        });
    }

    /*minus counter*/
    function minus(i){
        var $input = $('.shopping_order_goods_quantity_value_'+i);


        $('.shopping_order_goods_quantity_minus_'+i).click(function () {

            $input.val(parseInt($input.val()) - 1);
            $input.change();

            var totalPrice = +$('.shopping_order_goods_total_value_'+i).text(),
                orderPrice = +$('.shopping_order_goods_price_position_'+i).text(),
                newPrice = totalPrice - orderPrice;
            $('.shopping_order_goods_total_value_'+i).text(newPrice.toFixed(2));

            if (+$input.val() === 0) {
                console.log('false')
                $('.shopping_order_goods_quantity_minus_'+i).attr('disabled', true);
            }


            var totalPrice1 = +$('.shopping_order_goods_total_value_1').text();
            var totalPrice2 = +$('.shopping_order_goods_total_value_2').text();
            var totalPrice3 = +$('.shopping_order_goods_total_value_3').text();
            newPrice = totalPrice1 + totalPrice2 + totalPrice3;
            $('.shopping_total_order').text(newPrice.toFixed(2));

            return false;
        });
    }

    /*work counter of shopping basket order goods quantity*/
    for(var i=1; i<4;i++){
        plus(i);
        minus(i);


        var totalPrice1 = +$('.shopping_order_goods_total_value_1').text();
        var totalPrice2 = +$('.shopping_order_goods_total_value_2').text();
        var totalPrice3 = +$('.shopping_order_goods_total_value_3').text();
        newPrice = totalPrice1 + totalPrice2 + totalPrice3;
        $('.shopping_total_order').text(newPrice.toFixed(2));


    }





//Buttons tabs  delivery at shopping.html (shopping basket)
    $('.shopping_delivery_tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.shopping_delivery_tabs li').removeClass('active');
        $('.shopping_delivery_tab_content li').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })


//popup Thank you for your order after pay order

    //open popup Thank you for your order
    $('.shopping_pay_button').on('click', function(event){
        event.preventDefault();
        $('.shopping_popup_thank').addClass('is-visible');
    });

    //close popup Thank you for your order
    $('.shopping_popup_thank').on('click', function(event){
        if( $(event.target).is('.shopping_popup_thank') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup Thank you for your order when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.shopping_popup_thank').removeClass('is-visible');
        }
    });


})
