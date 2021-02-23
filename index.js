const app = require('./app'); // Express app
const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Express server started on port ${3000}`);
});