const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem');

// Create a new menu item
router.get('/', async (req, res) => {
    try {
        const items = await menuItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.post('/', async (req, res) => {
    try{
        const data = req.body; 
        
        const newItem = new menuItem(data);
        
        const response = await newItem.save();
        console.log('items saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
});

module.exports = router;