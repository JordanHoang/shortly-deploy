var app = require('./server-config.js');
var mongoose = require('mongoose');

var port = 4568;

app.listen(port); 
console.log('Finally got push fml');
console.log('Server now listening on port ' + port);
