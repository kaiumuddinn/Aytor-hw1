$(function () {
    

    $('#banner').slick({
        arrows: false,
        dots: true,
        dotsClass: 'bannerDots container',

      });


      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

})