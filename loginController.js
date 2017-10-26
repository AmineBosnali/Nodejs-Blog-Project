
var Kullanici=require('../models/kullanici');
var Yazi=require('../models/yazi');

module.exports.indexGet=function(req,res){
  if(req.session.kullaniciAdi){
    res.redirect("/");
  }else{

 
    res.render('login',{
      mesaj:'',
      title:'Giriş Yap',
     kullaniciAdi:req.session.kullaniciAdi
    });
    
  }    
};
module.exports.indexPost=function(req,res){
      console.log(req.body);
     Kullanici.find({kullaniciAdi:req.body.username,sifre:req.body.password},function(err,res2){
       console.log(res2);
       if(res2.length==0){
         res.render('login',{
           mesaj:'Hatalı kullanıcı adı veya şifre',
          title:'Giriş Yap',
           kullaniciAdi:req.session.kullaniciAdi
         });
       }else{
         req.session.giris=true;
         req.session.kullaniciAdi=req.body.username;
         res.redirect('/');
       }
     
     })
   
}

module.exports.signupGet=function(req,res){
    res.render('signup',{
      mesaj:'',
      classIsmi:'',
      title:'Kayıt Ol',
      kullaniciAdi:req.session.kullaniciAdi
    });
}
module.exports.signupPost=function(req,res){



    var yeniKullanici=new Kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        kullaniciAdi:req.body.kullaniciAdi,
        email:req.body.email,
        sifre:req.body.sifre

    });


    yeniKullanici.save(function(err){
      if(!err){
        res.redirect('panel');
      }else{
        res.render('signup',{
          mesaj:'Kayıt Başarısız',
          classIsmi:'danger',
          kullaniciAdi:req.session.kullaniciAdi,
          title:'Yazı Listesi'
        });
      }
    });
};

module.exports.kullanicilarListesi=function(req,res){
   
    Kullanici.find(function(err,results){
   //   console.log(results);
      res.render('kullanicilarListesi',{
        kullanicilar:results,
        kullaniciAdi:req.session.kullaniciAdi,
        title:'Yazı Listesi'
      });
    });

    
}
module.exports.kullaniciSil=function(req,res){
 
     Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
       if(err){
             console.log('silmede hata var');
       }else{
             res.redirect('/login/kullanicilarListesi');
       }
     });
   
  
   
}

module.exports.yaziGet=function(req,res){
  res.render('yazi',{
    mesaj:'',
    classIsmi:'',
    title:"Yazılar",
    kullaniciAdi:req.session.kullaniciAdi
    
  });
};

module.exports.yaziPost=function(req,res){
  
     
  console.log(req.body.gorsel);
  
      var yeniYazi=new Yazi({
          baslik:req.body.baslik,
          metin:req.body.metin,
          gorsel:req.body.gorsel,
          tarih:new Date()
      
      });
  
  
      yeniYazi.save(function(err){
        if(!err){
          res.redirect('yaziListesi');
          
        }else{
          res.render('yazi',{
            mesaj:'Kayıt Başarısız',
            classIsmi:'danger',
    kullaniciAdi:req.session.kullaniciAdi
    
          });
        }
      });
  };

  module.exports.yaziListesi=function(req,res){
    
     Yazi.find(function(err,results){
    //   console.log(results);
       res.render('yaziListesi',{
         yazilar:results,
         title:'Yazı Listesi',
         kullaniciAdi:req.session.kullaniciAdi
        });
     });
    
     
 }

 module.exports.yaziSil=function(req,res){
  
      Yazi.findOneAndRemove({metin:req.params.metin},function(err){
        if(err){
              console.log('silmede hata var');
        }else{
              res.redirect('/login/yaziListesi');
        }
      });
 }

 module.exports.panelGet=function(req,res){
   if(req.session.kullaniciAdi){
  res.render('panel',{
    title:"Panel Sayfası",
    kullaniciAdi:req.session.kullaniciAdi
    
  });
  }else{
    res.redirect('/login');
  }
}
