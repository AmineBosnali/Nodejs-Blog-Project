var path=require('path');

var Yazi=require('../models/yazi');
module.exports.index=function(req,res){
    Yazi.find({}).sort({tarih:-1}).exec(function(err,results){
      //  console.log(results);
     
       
         var  kullaniciAdi=req.session.kullaniciAdi;
        
        res.render('home',{yazilar:results,title:'Blog Projem',kullaniciAdi:kullaniciAdi});
      });
     }

     module.exports.hakkinda=function(req,res){
      res.render('hakkinda',{
        title:'Yazı Listesi',
        kullaniciAdi:req.session.kullaniciAdi
      });
      
  }


  module.exports.cikisYap=function(req,res){

    req.session.destroy();
    res.redirect("/");
  }

