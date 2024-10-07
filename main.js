const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Routes
// Get method
// Home route
router.get("/",(req,res,next)=>{
    res.send("HomePage");
    res.render('index');

});

app.get('/', (req, res) => {
    res.render('index');
});


app.post('/activate', (req, res)=>{

});

module.exports = router;