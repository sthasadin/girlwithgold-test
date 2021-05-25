const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const Product = require('./routes/product');
const Image = require('./routes/image');
const Advertisement = require('./routes/advertisment');
const User = require('./routes/user');
const auth = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); //thats two underscore
app.options('*', cors());
app.use(cors());

mongoose.connect(
  process.env.MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function () {
    console.log('successfully connected to mongodb server');
  }
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./passport').AUTH(passport);

app.use('/api/product', Product);
app.use('/api/image', Image);
app.use('/api/ads', Advertisement);
app.use('/api/user', User);
app.use('/api/auth', auth);
app.use(express.static(__dirname + '/client/build'));
//except for api requests all other requests will be listened by client
//matching requests will be responded
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server running at port 5000`);
});
