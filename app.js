const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//++++++++++++++++  Database Config ++++++++++++++++++++++++++++//

//connection to database
mongoose.connect(config.database);
//verify connection to database
mongoose.connection.on('connected', () => {
    console.log('connected to database' + ' ' + config.database);
});
//error reporting for database
mongoose.connection.on('error', (err) => {
    console.log('database error is: ' + err);
});


const app = express();
const users = require('./routes/users'); 

const port = 3000;

app.use(cors());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser 
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//+++++++++++++++++++++++++routing+++++++++++++//

app.use('/users', users);

app.get('/', (req, res) => {
    res.send("This is the home page!");
})

app.listen(port, () => {
    console.log("Server is running on " + port)
});