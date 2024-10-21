var express = require('express');
var app = express();
var formidable = require('formidable');

app.use(express.static(__dirname + '/WebCalculatorSolution/WebCalculator'))

app.get('/', function(request, response) {
    response.redirect('default.html')
});

app.post('/ContactMessage', function(request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields) {
        var lastName = fields.lastName,
            firstName = fields.firstName,
            email = fields.email,
            message = fields.message;

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Thank You, ') + firstName + ' ' + lastName + '<br/>';
        response.write('We will contact you at ' + email + '<br/>');
        console.log('Handled Req for ')+ firstName + ' ' + lastName;
    });
});

app.post('/ContactService', function(request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields) {
        var lastName = fields.lastName,
            firstName = fields.firstName,
            email = fields.emailAddress,
            message = fields.message,
            result = 'Thanks, ' + firstName + ' ' + lastName + '.<br />'
            + 'We will contact you at ' + email + '.<br/>'
            + 'Your message: ' + message + '<br />';

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{"result": " ' + result + '"}');
        console.log('Handled serv Req for ') + firstName + ' ' + lastName;
    });
});

var port = 8080;
app.listen(port)
console.log('Listening on port: ' + port)