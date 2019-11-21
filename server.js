const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const express = require('express'),
      app = express(), 
      bodyParser = require('body-parser');
      mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes');

app.use('/api/', routes)

const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const server = app.listen(port);
  })
  .catch(err => console.log(err))

