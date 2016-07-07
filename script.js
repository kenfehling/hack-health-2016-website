var API_HOST = 'https://hackhealth.herokuapp.com';
//var API_HOST = 'http://127.0.0.1:5000';

function setupForm($form, path, callback) {
    var options = {
        url: API_HOST + path,
        success: callback
    };
    //$form.on('submit', function(e) {
    //    e.preventDefault();
    //});
    $form.ajaxForm(options);
}

$(function() {
    $("nav a").smoothScroll({
        preventDefault: true,
        offset: -50  // to account for nav bar height
    });

    setupForm($('.register-form'), '/register', function(response) {
        console.log(response);
    });

    // Wake up Heroku
    var image = new Image();
    image.src = API_HOST + '/pixel.gif';
});
