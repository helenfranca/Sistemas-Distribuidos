var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require('body-parser')

app.use(bodyParser());

//Cliente
app.get('/', function (req, res) {

    res.sendFile(`${__dirname}/index.html`);

});

//Passo 3
app.get('/dados', function (req, res) {

    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(`${__dirname}/data.db`);

});

//Passo 2
app.post('/dados', function (req, res) {

    fs.writeFile('data.db',req.body.palavra, function(err,data){
        res.redirect('/');
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});