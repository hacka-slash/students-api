const express = require('express');
const router = express.Router();
const Graduate = require('../models/Graduate')

router.get('/',async (req, res) => {
    // res.send('This is the graduates Route');
    // console.log("Access to graduate route")
    try{
        const graduates = await Graduate.find();
        res.json(graduates);
        console.log(graduates);
    }catch(err){
        res.json({message: err});
    }
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