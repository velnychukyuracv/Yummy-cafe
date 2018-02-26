$(document).ready(function(){

//popup enter user

    //open popup enter user
    $('.popup_user').on('click', function(event){
        event.preventDefault();
        $('.popup_enter').addClass('is-visible');
    });

    //close popup enter user
    $('.popup_enter').on('click', function(event){
        if( $(event.target).is('.popup_enter_close') || $(event.target).is('.popup_enter') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup enter user when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.popup_enter').removeClass('is-visible');
        }
    });


//popup registration new user

    //open popup registration new user
    $('.registration').on('click', function(event){
        event.preventDefault();
        $('.popup-enter').removeClass('is-visible');
        $('.popup-registration').addClass('is-visible');
    });

    //close popup registration new user
    $('.popup-registration').on('click', function(event){
        if( $(event.target).is('.popup-registration-close') || $(event.target).is('.popup-registration') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup registration new user  when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.popup-registration').removeClass('is-visible');
        }
    });


//validation form registration
    $('#submit').on('click', function(event){

        //name

        //surname

        //number phone
        $('#phone').inputmask({"mask": "+38(099) 999-99-99"}); //specifying options

        //number cart

        //e-mail

        //password
        $('#re-password').change(function() {
            var pass = $("#password").val();
            var pass_rep = $("#re-password").val();

            if (pass != pass_rep) {
                $("#re-password").css('border', 'red 2px solid');
                $('#re-password').attr("title", 'Passwords do not match');
            }
        });

        //checked confirm
        if ($("#confirm").is(":checked")) {
            $('#confirm-text').css('color', 'green');
        } else {
            $('#confirm-text').css('color', 'red');
            $('#confirm').attr("title", 'You must confirm for registration');
        }

    });



});