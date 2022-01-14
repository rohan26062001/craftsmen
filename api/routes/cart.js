var express = require("express");
const router = express.Router();
const User = require('../models/User')

router.route('/:id').get(async (req, res) => {   // GET Cart By User ID
    try {
        const user = await User.findById(req.params.id)
        res.send(user.cartitem)
    }
    catch (err) {
        res.status(500).send({ error: err })
    }
}).patch(async (req, res) => {   // PATCH Cart By ID
    try {
        const updateCart = {
            cartitem: req.body.cartitem
        }
        const user = await User.findByIdAndUpdate(req.params.id, updateCart)
        res.send(user.cartitem)
    }
    catch (err) {
        res.status(500).send({ error: err })
    }
})

module.exports = router;