const express = require('express');
const router = express.Router();
console.log('router loaded');
const homeController = require('../controllers/homecontroller')


router.get('/',homeController.home)
router.get('/profile',homeController.profile)
module.exports = router;

