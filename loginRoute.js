
var express=require('express');
var router=express.Router();

var ctrlLogin=require('../controller/loginController');

router.get('/',ctrlLogin.indexGet);
router.post('/',ctrlLogin.indexPost);
router.get('/signup',ctrlLogin.signupGet);
router.post('/signup',ctrlLogin.signupPost);
router.get('/kullanicilarListesi',ctrlLogin.kullanicilarListesi);
router.get('/yazi',ctrlLogin.yaziGet);
router.post('/yazi',ctrlLogin.yaziPost);
router.get('/yaziListesi',ctrlLogin.yaziListesi);
router.get('/kullaniciSil/:kullaniciAdi',ctrlLogin.kullaniciSil);
router.get('/yaziSil/:metin',ctrlLogin.yaziSil);
router.get('/panel',ctrlLogin.panelGet);

module.exports=router;