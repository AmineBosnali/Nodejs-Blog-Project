var express=require('express');
var router=express.Router();
var controller=require('../controller/homeController');


router.get('/',controller.index);
router.get('/hakkinda',controller.hakkinda);
router.get('/cikisYap',controller.cikisYap);

module.exports=router;