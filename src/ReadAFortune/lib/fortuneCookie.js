var http = require('http');
var fortunes = require('./fcService');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fortunes.getNextFortune().text);
}).listen(process.env.PORT);
