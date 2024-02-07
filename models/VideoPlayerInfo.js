const mongoose = require('mongoose');

const VideoPlayerInfoSchema = new mongoose.Schema({
  userId : String,
  date : Date,
  videoId: String,
  token: String,
  isPlay: Number
});

const VideoPlayerInfo = mongoose.model('tbl_MyClass_VideoPlayerInfos', VideoPlayerInfoSchema);

module.exports = VideoPlayerInfo;
