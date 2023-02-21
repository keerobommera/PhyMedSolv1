$(document).ready(function () {

    $(".section-one").addClass("owl-carousel");
    $(".section-one.owl-carousel").owlCarousel({
        margin: 0,
        loop: true,
        stagePadding: 0,
        autoplay: false,
        slideSpeed: 600,
        paginationSpeed: 100,
        nav: true,
        center: true,
        items: 1,
        dots: true,
        autoHeight: true,
        navText: ["<img src='./images/LeftArrow.png'>", "<img src='./images/rightArrow.png'>"]
    })
   
   
});

if (window.innerWidth <= 1024) {
    $(document).ready(function () {
    $("div#close-wrapper").click(function () {
        $('div#nav').toggleClass('mob-open');
        $('div#close-wrapper').toggleClass('opened');

    });
    $(window).resize(function(){
        $("div#close-wrapper").click(function () {
            $('div#nav').toggleClass('mob-open');
            $('div#close-wrapper').toggleClass('opened');
    
        });
    });
});
}
// if (window.innerWidth <= 1023) {
//     $(document).ready(function () {
//         $("div#close-wrapper").click(function () {
//             $('span#menu-mob').toggleClass('mob-open');
//         });
//     });
// }
// if (window.innerWidth <= 1024) {
    
//     $(document).ready(function () {
//     $("div#close-wrapper").click(function () {
//         $('span#menu-mob').toggleClass('mob-open');
//     });
// }