import express from 'express';
import bodyParser from'body-parser';
import https from'https';

import routes from './routes.js';
import credentials from '../keys/credentials';

const app = express();
app.use(bodyParser.json());
app.use(routes);

const httpsServer = https.createServer(credentials, app);
export default httpsServer;