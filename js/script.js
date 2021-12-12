$(document).ready(function() {
    $('.hamburger-menu').click(function() {
        $('.navigation').toggleclass('change');
    });

    
    lightbox.option({
        'wrapAround': true
    });

    $(window).scroll(function(){
        let.position = $(this).scrollTop();

        if(position >=350) {
            $('.gallery').addClass('change');
        }
        else {
            $('.gallery').removeClass('change');
        }
    });

    $('.writers-accordion').click(function(event) {
        if(event.target.id.split('-')[0] ==='button') {
            $('#book-1').attr('src', '-pictures/' + event.target.id.split('-')[1] + '-book-1.jpg')
            $('#book-2').attr('src', '-pictures/' + event.target.id.split('-')[1] + '-book-2.jpg')
        }
    })
});