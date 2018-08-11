import { readFileSync } from 'fs';

const read = fileName => readFileSync(fileName, 'utf8');

const key = read('./keys/key.pem');
const cert = read('./keys/cert.pem');

export default { key, cert }