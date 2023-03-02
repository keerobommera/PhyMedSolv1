jQuery(document).ready(function(){


    setTimeout(function(){
        jQuery(".section-one.page-home").addClass("owl-carousel");
    jQuery(".section-one.page-home.owl-carousel").owlCarousel({
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
    }, 1500);
    
   
   
});

if (window.innerWidth <= 1024) {
    jQuery(document).ready(function () {
    jQuery("div#close-wrapper").click(function () {
        jQuery('div#nav').toggleClass('mob-open');
        jQuery('div#close-wrapper').toggleClass('opened');

    });
    jQuery(window).resize(function(){
        jQuery("div#close-wrapper").click(function () {
            jQuery('div#nav').toggleClass('mob-open');
            jQuery('div#close-wrapper').toggleClass('opened');
    
        });
    });
});
}
// if (window.innerWidth <= 1023) {
//     jQuery(document).ready(function () {
//         jQuery("div#close-wrapper").click(function () {
//             jQuery('span#menu-mob').toggleClass('mob-open');
//         });
//     });
// }
// if (window.innerWidth <= 1024) {
    
//     jQuery(document).ready(function () {
//     jQuery("div#close-wrapper").click(function () {
//         jQuery('span#menu-mob').toggleClass('mob-open');
//     });
// }