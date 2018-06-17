var server = require('./lib/server');

var workers = require('./lib/workers');


var app = {};

app.init = function(){
    // start the server
    server.init();

    // start the worker

    workers.init();
}

app.init();


module.exports = app;