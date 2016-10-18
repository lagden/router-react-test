'use strict';

require('babel-register')({
	plugins: ['transform-async-to-generator']
});

const server = require('./server');

server.listen(process.env.PORT || 3000);
