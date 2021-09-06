const express = require('express');
const usersBL = require('../models/usersBL');


const router = express.Router();


router.post('/login', async function(req, res) {
    

    const username = req.body.username;
    const password = req.body.password;
    let data = await usersBL.getAllUsers();

    let firstname = "";
    
    data.forEach(user => {
        

        if(req.body.username == user.username && req.body.password == user.password)
        {
            firstname = user.fname;
        }
        
    });

    if(firstname == "")
    {
        return res.json("Unauthorized")
    }
    else
    {
        return res.json(firstname);
    }

});

  module.exports = router;