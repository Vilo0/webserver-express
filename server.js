const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'edgard vILO'
    });

});

app.get('/about', function(req, res) {

    res.render('about');

});

// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'Edgard',
//         edad: 28,
//         url: req.url
//     };

//     res.send(salida);

//     res.send('Hola mundo');
// });

app.get('/data', function(req, res) {

    res.send('Hola data');

    //res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});