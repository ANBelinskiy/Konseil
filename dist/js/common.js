$(document).ready(function() {
$('.main-screen-box').addClass('show-left');
$('.main-title, .main-text, .main-subtitle, .menu-btn img').addClass('anim-left');
$('.main-menu-services li').addClass('anim-right');
$('.main-screen-box .btn-gold, .phone-box, .lang-menu, .main-title, .main-text, .main-subtitle, .menu-btn img').addClass('show');
//////////////////////////// Tkach js //////////////////////////////////

    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });

    $(".click-top").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, '400');
    });


    $(".btn-more").on("click", function(){

        $(this).hide();

        $(this).siblings(".btn-less").show();

        $(this).parent().siblings(".read-more-list").find(".item-none").slideDown(100);

    });


    $(".btn-less").on("click", function(){

        $(this).hide();

        $(this).siblings(".btn-more").show();

        $(this).parent().siblings(".read-more-list").find(".item-none").slideUp(100);

    });

    $(".single-item").slick({
        dots: true,
        arrows: true,
        customPaging: (slider, i) => `<a>0${i + 1}</a>`,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".testimonials-item").slick({
        dots: true,
        arrows: true,
        customPaging: (slider, i) => `<a>0${i + 1}</a>`,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

//////////////////////////// Tkach js //////////////////////////////////

/////////////////////////// Gritsyuk js ////////////////////////////////

 var $status = $('.numberInfo');
    var $slickElement = $('.newspaper-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        dots: true
    });

    var $statusNumber = $('.numberInfoSeminar');
    var $slickElement = $('.seminar-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var j = (currentSlide ? currentSlide : 0) + 1;
        $statusNumber.text(j + '/' + slick.slideCount);
    });

    $slickElement.slick({
        dots: true
    });

    var $statusNumbers = $('.numberInfoFeedback');
    var $slickElement = $('.feedbacks-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var k = (currentSlide ? currentSlide : 0) + 1;
        $statusNumbers.text(k + '/' + slick.slideCount);
    });

    $slickElement.slick({
        dots: true
    });

    /*Open program coaching*/
    $('.button-more').click(function () {
        $('.button-more').hide();
        $('.coaching-read-more').addClass('active');

    });
    /*Close program coaching*/
    $('.button-less').click(function () {
        $('.button-more').show();
        $('.coaching-read-more').removeClass('active');

    });

/////////////////////////// Gritsyuk js ////////////////////////////////
});