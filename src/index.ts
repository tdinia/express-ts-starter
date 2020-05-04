import Server from './server';

// Port
const port = 3000;

// Instanciate a new Server
const server = new Server(port);

server.start();
server.connectDB();
