$(document).ready(function () {
    // mobile menu
    $('.mob-menu').click(function () {
        $(this).toggleClass('active');
        $('.navbar').slideToggle();
    });
    $('.slide-wrap').slick({
        arrows: true,
        dots: false,
    });
    var incrementPlus;
    var incrementMinus;

    var buttonPlus = $(".dec-button");
    var buttonMinus = $(".inc-button");

    var incrementPlus = buttonPlus.click(function () {
        var $n = $(this)
            .parent(".digits")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function () {
        var $n = $(this)
            .parent(".digits")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });
    $(".tabs").tabs(
        {active:2}
    );
    $( ".accordion" ).accordion();
    $('.ui-tabs-tab').click(function(){
        $(".accordion" ).accordion( "refresh" );
        $(".slider-wrapper" ).slick( "refresh" );
        $(".slider-for" ).slick( "refresh" );
        $(".slider-nav" ).slick( "refresh" );
    });
    $('.slider-wrapper').slick({
        mobileFirst:true,
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        }
        ]
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
      });
      $('.slider-nav').slick({
        mobileFirst:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical:true,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            }
        ]
    });
    if($(window).width()<=767){
        $('.arrow').click(function () {
            $(this).toggleClass('active');
            $('.dropdown').slideToggle();
      });
    }
});


    