const express = require('express');

const router = express.Router();
const VideoPlayerInfoController = require('../controllers/VideoPlayerInfoController');
const UserController = require('../controllers/UsersController');

router.get('/VideoPlayerInfo/GetAll', VideoPlayerInfoController.getItems);
router.get('/VideoPlayerInfo/GetById/:id', VideoPlayerInfoController.getItemsById);
router.get('/VideoPlayerInfo/GetByToken/:token', VideoPlayerInfoController.getItemsByToken);
router.post('/VideoPlayerInfo/Save', VideoPlayerInfoController.createItem);
router.put('/VideoPlayerInfo/Update/:token', VideoPlayerInfoController.updateItem);
router.get('/VideoPlayerInfo/Delete/:id', VideoPlayerInfoController.deleteItem);
// router.delete('/VideoPlayerInfo/Delete/:id', VideoPlayerInfoController.deleteItem);

// User Api
router.post('/Users/Login', UserController.login);
module.exports = router;
