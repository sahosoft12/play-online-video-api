const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const VideoPlayerInfo = require('../models/VideoPlayerInfo');

const secretKey = '12345';
// Get all items
exports.getItems = async (req, res) => {

  try {
    const info = await VideoPlayerInfo.find();
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create an VideoPlayerInfo
exports.createItem = async (req, res) => {
 console.log(req.body);
  let token = generateTokens(req.body);
  const info = new VideoPlayerInfo({
    userId: req.body.userId,
    date: req.body.date,
    videoId: req.body.videoId,
    token: token,
    isPlay: req.body.isPlay,

  });

  try {
    const newinfo = await info.save();
    res.status(201).json({sucess:true, token:token});
   
    
  } catch (err) {
    res.status(400).json({ message: err.message, success:false});
 
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedInfo = await VideoPlayerInfo.findOneAndUpdate({token:req.params.token}, req.body);
    res.json(updatedInfo);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    console.log(req.params.id);
    await VideoPlayerInfo.deleteOne({ "_id": req.params.id });
    res.json({ message: 'Info deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
// Get all items
exports.getItemsById = async (req, res) => {

  try {

    const info = await VideoPlayerInfo.findOne({ "_id": req.params.id });

    res.json(info);
  } catch (err) {

    res.status(500).json({ message: err.message });
  }
};

exports.getItemsByToken = async (req, res) => {

  try {

    const info = await VideoPlayerInfo.findOne({ "token": req.params.token});

    res.json(info);
  } catch (err) {

    res.status(500).json({ message: err.message });
  }
};
// db.findByIdDemo.find({"_id" :ObjectId("5e07158c25ddae1f53b621fd")});
function generateTokens(body) {

  return jwt.sign(body, secretKey);
}