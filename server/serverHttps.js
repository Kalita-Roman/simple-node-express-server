import https from'https';

import credentials from '../keys/credentials';
import app from './server';

export default https.createServer(credentials, app);
