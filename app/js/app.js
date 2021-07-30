// Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
    // Custom JS

    $('.navbar-mobile-button__btn').click(function () {
        if ($(this).hasClass('navbar-mobile-button__btn--close')) {
            $(this).removeClass('navbar-mobile-button__btn--close');
            $('.navbar-menu').removeClass('navbar-menu--show');
        } else {
            $(this).addClass('navbar-mobile-button__btn--close');
            $('.navbar-menu').addClass('navbar-menu--show');
        }
    });
});
