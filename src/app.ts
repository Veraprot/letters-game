import dotenv from 'dotenv';
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './api';

dotenv.config();

async function startServer() {
  const app = express();
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/api', routes());

  const port = process.env.PORT || 3001;
  mongoose.connect(
    process.env.MONGO_URI, 
    { useNewUrlParser: true })
    .then(() => {
      app.listen(port, err => {
        if(err) {
          console.log(err) 
          process.exit(1);
          return
        }
        console.log(`
          ################################################
            Server listening on port: ${port} 
          ################################################
        `);
      });
    })
    .catch(err => console.log(err))
}

startServer();
