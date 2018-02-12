var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    var email ='';
    User.findOne({},function(err, doc){
        if(err){
            return res.send('Error!');
        }
        if(doc){
            email=doc.email;
        }
res.render('node',{email: email});

    }); 
});

/* router.get('/message', function (req, res, next) {
        res.render('node');
    }); */

    router.post('/', function(req,res,next){
        var email = req.body.email;
        var user = new User({
            firstName: 'Raja',
            lastName: 'Challapu',
            password: 'raja',
            email: email

        });

        //save data in DB
        user.save();
        res.redirect('/');

    });

module.exports = router;
