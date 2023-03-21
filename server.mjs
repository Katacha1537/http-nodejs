import { createServer } from 'http';

createServer((req, res) => {
  res.write('Fala Katacha');
  res.end();
}).listen(process.env.PORT);
