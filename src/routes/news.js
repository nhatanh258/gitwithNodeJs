const express = require('express');
const router = express.Router();
                    module.exports = router;
                    const newsController = require('../app/controllers/NewsController');
                    // cau hinh cac duong dan trong trang news
                    router.use('/:slug', newsController.show);
                    router.use('/', newsController.index); // dau gach o day dai dien cho ban than trang news
                    // cau hinh caca trang con trong news
