const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000; //Proveedor asigna el puerto,sino ponemos el 3000

app.use(express.static(__dirname + '/public'));
// Express HBS engine:
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers
require('./hbs/helpers');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'william zamoRA'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));