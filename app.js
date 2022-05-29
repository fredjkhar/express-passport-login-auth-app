const express = require('express');
const expressLayouts = require('express-ejs-layout');

const app = express(); //create express server

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000; //create a port to run the server on 

app.listen(PORT, console.log(`Server started on port ${PORT}`)); //run express server