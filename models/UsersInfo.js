const mongoose = require('mongoose');

const UsersInfoSchema = new mongoose.Schema({
  name : String,
  password:String,
  emailId: String,
 
});

const UsersInfo = mongoose.model('users', UsersInfoSchema);

module.exports = UsersInfo;
