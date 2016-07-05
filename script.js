$(function() {
    $('nav a').smoothScroll({
        preventDefault: true,
        offset: -50  // to account for nav bar height
    });
});