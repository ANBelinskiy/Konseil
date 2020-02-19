$(document).ready(function() {

//////////////////////////// Tkach js //////////////////////////////////

    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });
    $(".click-top").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, '400');
    });

    // $(".btn-more").on("click", function(){
    //     $(this).prev(".item-none").slideDown(100);
    // });

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

    // $(function() {

    //     $('div.tabs__caption').on('click', 'div:not(.active)', function() {
    //         $(this)
    //             .addClass('active').siblings().removeClass('active')
    //             .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    //     });

    // });

    // $(".vido-box").on("click", function() {
    //     $(this).removeClass("play-icon");
    // });

    // $(".video-play").on("click", function() {
    //     $(this)[0].play();
    //     $(this).attr('controls', true);
    // });

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

    // $(window).resize(function() {
    //     if ($(window).width() < 990) {
    //         $('.show-blog').click(function() {
    //             $('.blog-box:nth-child(n+2)').slideToggle(250);
    //         });
    //         $('.show-coment').click(function() {
    //             $('.tabs__caption div:nth-of-type(n+3)').slideToggle(250);
    //         });
    //     }
    // });

//////////////////////////// Tkach js //////////////////////////////////






/////////////////////////// Gritsyuk js ////////////////////////////////


/////////////////////////// Gritsyuk js ////////////////////////////////







/////////////////////////// Sabadash js ////////////////////////////////

/////////////////////////// Sabadash js ////////////////////////////////

});