const express = require('express');
const usersBL = require('../models/usersBL');

const router = express.Router();

router.post('/login', async function(req, res) {
    
    //Receive username & password from client
    const username = req.body.username;
    const password = req.body.password;

    let data = await usersBL.getAllUsers();
    let firstname = "";
    
    //For each user, verify if combination of username and password available
    data.forEach(user => {
        if(req.body.username == user.username && req.body.password == user.password)
        {
            //If one available, create string first name
            firstname = user.fname;
        }
        
    });

    //If username and password combination found return user fname, else return 'Unauthorized'
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