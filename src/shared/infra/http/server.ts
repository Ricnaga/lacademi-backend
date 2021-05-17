import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import ApiFile from '../../documentation/apidoc.json';
import routes from './routes';

const server = express();
const PORT = 3333;

server.use(cors());
server.use(express.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(ApiFile));

server.use(routes);

server.listen(PORT, () => {
  console.log(
    `Is being watched in port:${PORT} - Quis custodiet ipsos custodes?👀`,
  );
});
