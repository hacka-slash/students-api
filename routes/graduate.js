const express = require('express');
const router = express.Router();
const Graduate = require('../models/Graduate')

router.get('/', (req, res) => {
    res.send('This is the graduates Route');
})

router.post('/', async (req, res) => {
    const graduate = new Graduate(req.body);
    //console.log(graduate)
    
    try{
        const savedGraduate = await graduate.save()
        res.json(savedGraduate);
        console.log(savedGraduate);
    }catch(err){
        res.json({message: err})
        console.log(err);
    }
})


module.exports = router;