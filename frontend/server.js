//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const db = require('./query');
//our all the query connections are there in query.js
const path = require('path');
const app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));
const port = process.env.PORT || 3333; //add your port no. here

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + 'https://ataka-organix.herokuapp.com/'));

// app.get('/*', function (req, res) {

//     res.sendFile(path.join(__dirname + 'https://ataka-organix.herokuapp.com/'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);