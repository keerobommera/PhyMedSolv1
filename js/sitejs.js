$(document).ready(function () {

    $(".section-one").addClass("owl-carousel");
    $(".section-one.owl-carousel").owlCarousel({
        margin: 0,
        loop: true,
        stagePadding: 0,
        autoplay: false,
        nav: true,
        center: true,
        items: 1,
        dots: true,
        autoHeight: true,
        navText: ["<img src='./images/LeftArrow.png'>", "<img src='./images/rightArrow.png'>"]
    })
    // slideSpeed: 300,
    // paginationSpeed: 400,
});