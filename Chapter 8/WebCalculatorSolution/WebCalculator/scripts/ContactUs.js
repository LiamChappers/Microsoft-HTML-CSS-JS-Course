$(document).ready(function() {
    $('#submit').on('click', callServer);
});

function callServer() {
    var data = $('form[name="ContactForm"]').serialize();
    console.log(data, $('#ContactForm'))
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}