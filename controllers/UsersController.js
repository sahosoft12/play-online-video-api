const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const UsersInfo = require('../models/UsersInfo');

const secretKey = '12345';
// Get all items
exports.login = async (req, res) => {

    try {
        console.log(req);
        let email = req.body.emailId;
        console.log(email);
        let pass = req.body.password;

        const info = await UsersInfo.findOne({ "emailId": email });
        if (info.password == pass) {
            let token = generateTokens(req.body);
            res.json({success:true, data: {userId: info._id, name: info.name, emailId: info.emailId, token: token}});
        }

    } catch (err) {
        res.status(500).json({ message: err.message, success:false });
    }
};




// db.findByIdDemo.find({"_id" :ObjectId("5e07158c25ddae1f53b621fd")});
function generateTokens(body) {
    const secretKey = 'your_secret_key'; // Replace with your actual secret key
    return jwt.sign(body, secretKey);
}