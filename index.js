require('babel-core/register');
require('babel-polyfill');

const server = require('./server/server.js').default;

const port = process.env.PORT || 8080;
server.listen(port);
console.log(`Listening at http://localhost:${port}`);
