const app = require('express')();
const http = require('http');

app.use('/', function(req, res, next){
    res.writeHead('200', {'Content-Type': "text/html"});
    res.end('\n Welcome the purely nodeJS ROOT......\n');
    next();
});

app.use('/demo/', function(req, res, next){
    res.send('\n Welcome the purely nodeJS DEMO ..\n');
});

http.createServer(app).listen(process.env.npm_package_config_port);

