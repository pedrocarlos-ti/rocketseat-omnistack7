const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//prettier-ignore
mongoose.connect(process.env.MONGO_CONFIG, { useNewUrlParser: true }, 
  err => { 
    if (err) return console.log(err); 
      console.log('Conectado ao MongoDB');
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

//prettier-ignore
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);
