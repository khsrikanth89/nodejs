var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(require('./auth'));
app.use('/api/sessions', require('./controller/api/sessions'));
app.use('/api/users', require('./controller/api/users'));
app.use('/api/posts', require('./controller/api/posts'));
app.use( require('./controller/static'));
var port = process.env.PORT || 8083;
var server = app.listen(port, function () {
	console.log('Server', process.pid, 'listening on', port);
});
require('./websockets').connect(server);
