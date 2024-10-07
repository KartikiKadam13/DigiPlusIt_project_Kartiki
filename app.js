require('dotenv').config();

const express = require('express'); 

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', require('./routes/main'));

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`);
});