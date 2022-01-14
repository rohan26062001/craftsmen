const express = require('express');
const router = express.Router();
const PUBLISHABLE_KEY=process.env.PUBLISHABLE_KEY
const SECRET_KEY=process.env.SECRET_KEY
const stripe = require('stripe')(SECRET_KEY);

const router = express.Router();

router.post('/payment', function(req, res){ 

    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: req.body.name, 
        address: { 
            line1: req.body.address, 
            postal_code: req.body.pincode, 
            city: req.body.city, 
            state:req.body.state, 
            country: req.body.country, 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: req.body.amount,    // Charing Rs 25 
            description: req.body.product, 
            currency: 'INR', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.send("Success") // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 