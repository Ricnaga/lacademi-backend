import express from 'express';
import cors from 'cors';
import routes from './routes';

const cfgServer = express();

cfgServer
  .use(cors())
  .use(express.json())
  .use(routes)
  .listen(3333, () => {
    console.log(
      '👀 Is watched in localhost:3333 - Quis custodiet ipsos custodes?',
    );
  });
