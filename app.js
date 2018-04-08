const http = require('http');

http.createServer((res, req) => {
        req.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'William',
            edad: 18,
            url: req.url
        }
        req.write(JSON.stringify(salida));
        req.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');