$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

// Модальное окно
$(document).ready(function() {
    $('a.myLinkModal').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
            $('#myModal')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });
});
// Модальное окно

// CSS Анимации
AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// CSS Анимации

// Якоря
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
           scrollTop: $(target).offset().top
        }, 1000);
    });
});
// Якоря

// btn up
function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 200){
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) =>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000)
    })
}

backToTop()
// btn up