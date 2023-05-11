// server.js
import jsonServer from 'json-server';
import todos from './db.js';

const server = jsonServer.create();
const router = jsonServer.router({ todos });
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
