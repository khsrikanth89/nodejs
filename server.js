var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(require('./auth'));
app.use('/api/sessions', require('./controller/api/sessions'));
app.use('/api/users', require('./controller/api/users'));
app.use('/api/posts', require('./controller/api/posts'));
app.use( require('./controller/static'));

var server = app.listen(8081, function () {
	console.log('Server listening on', 8081)
})
require('./websockets').connect(server)