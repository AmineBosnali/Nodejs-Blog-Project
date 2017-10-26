var routeHome=require('./homeRoute');
var routeLogin=require('./loginRoute');




module.exports=function(app){
    app.use('/',routeHome);
    app.use('/login',routeLogin);
    
}