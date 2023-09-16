// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const test_data = {
    la_238: 'ESTE ES EL nuevo cambio la re puta madre!',
    la_247: 'ESTE ES EL nuevo cambio la re  madre!',
    la_244: 'ESTE ES EL nuevo cambio la readre!',
    la_251: 'ESTE ES EL e puta madre!',
    la_250: 'ESTE ES EL nuevo cambio la re puta madre!',
    la_252: 'ESTE ES EL nuevo cambio la re puta madre!',
    la_mierda8: 'sjlkfd33333333AAAAAAAAAAAAAAAAAA33332222222222222222222222',
  }
    res.send(test_data);
});

app.get('/tests', (req, res) => {
    res.send("ESTA ES UNA URL PARA TEST! ");
});

app.get('/la_mierda_digo', (req, res) => {
    res.send("ESTA MIERDA NO ANDA!!! ");
});





app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

// Our DB Configuration
// require('./src/database');
require('./database');

const bodyParser = require('body-parser');

// Routes
// const postRouter = require('./src/routes/post.router');
const postRouter = require('./routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);

router = express.Router();

// will redirect all the non-api routes to react frontend
// router.use(function(req, res) {
    // res.sendFile(path.join(__dirname, '../client','build','index.html'));
// });
