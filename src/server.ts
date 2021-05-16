import express from 'express';
import cors from 'cors';
import routes from './routes';

const server = express();
const PORT = 3333;

server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(PORT, () => {
  console.log(
    `Is being watched in port:${PORT} - Quis custodiet ipsos custodes?👀`,
  );
});
