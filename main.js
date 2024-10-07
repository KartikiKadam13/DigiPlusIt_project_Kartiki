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

app.post('/activate', (req, res) => {
    const { simNumber } = req.body;
    const simCard = simCards.find(sim => sim.number === simNumber);

    if (!simCard) {
        return res.status(404).json({ message: 'SIM card not found' });
    }

    if (simCard.status === 'active') {
        return res.status(400).json({ message: 'SIM card is already active' });
    }

    simCard.status = 'active';
    simCard.activationDate = new Date();
    res.status(200).json({ message: 'SIM card activated successfully', simCard });
});

app.post('/deactivate', (req, res) => {
    const { simNumber } = req.body;
    const simCard = simCards.find(sim => sim.number === simNumber);

    if (!simCard) {
        return res.status(404).json({ message: 'SIM card not found' });
    }

    if (simCard.status === 'inactive') {
        return res.status(400).json({ message: 'SIM card is already inactive' });
    }

    simCard.status = 'inactive';
    res.status(200).json({ message: 'SIM card deactivated successfully', simCard });
});

module.exports = router;