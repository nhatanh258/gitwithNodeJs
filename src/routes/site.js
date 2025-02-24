const express = require('express');
const router = express.Router();
module.exports = router;
const newsController = require('../app/controllers/SiteController');
const SiteController = require('../app/controllers/SiteController');
// cau hinh cac duong dan trong trang trung gian
router.use('/search', SiteController.search);
router.use('/', SiteController.index);
