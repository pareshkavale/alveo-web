$(function () {
    // ==========================
    // Hamburger Menu Toggle
    // ==========================
    $(".humberger-menu").on("click", function () {
        $("body").addClass("menu-visible");
    });

    $(".side-menu .close-btn, .overlay").on("click", function () {
        $("body").removeClass("menu-visible");
    });

    // ==========================
    // Back to Top & Sticky Navigation
    // ==========================
    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();

        if (scrollTop >= 150) {
            $(".back-to-top").fadeIn();
            $(".top-navigation").addClass("fixed");
        } else {
            $(".back-to-top").fadeOut();
            $(".top-navigation").removeClass("fixed");
        }
    });

    $(".scrollUp").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    // ==========================
    // Testimonial Slider (Swiper)
    // ==========================
    if ($(".testimonial-slider").length) {
        const testimonialSwiper = new Swiper(".testimonial-slider", {
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            initialSlide: 1,
            keyboard: { enabled: true },
            mousewheel: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1
            },
            preventClicks: false,
            preventClicksPropagation: false,
            navigation: {
                nextEl: ".swiper-button-nex",
                prevEl: ".swiper-button-pre"
            }
        });
    }

    // ==========================
    // Navigation Dropdown Toggle
    // ==========================
    $(".nav-item").on("click", function () {
        $(this).siblings(".i").toggleClass("active-fal");
    });

    // ==========================
    // AOS Animation Initialization
    // ==========================
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    new WOW().init();
});

// ==========================
// Preloader Handling
// ==========================
$(window).on("load", function () {
    const $preloader = $(".pre-loader");

    $preloader.addClass("hidden");

    // Remove preloader after transition delay
    setTimeout(function () {
        $preloader.remove();
    }, 50000); // matches CSS transition
});
