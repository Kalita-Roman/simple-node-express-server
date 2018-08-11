require('babel-core/register');
require('babel-polyfill');

const useSSH = process.env.PROTOCOL === 'https';

const serverFile = useSSH
  ? './server/serverHttps.js'
  : './server/server.js';

const server = require(serverFile).default;

const port = process.env.PORT || 8080;
const protocol = useSSH  ? 'https' : 'http';

server.listen(port);
console.log(`Listening at ${protocol}://localhost:${port}`);
