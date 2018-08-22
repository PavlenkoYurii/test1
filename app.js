// подключение express
var express = require("express");
var fs = require("fs");
// создаем объект приложения
var app = express();

app.get("/", function(request, response){
     
    response.sendFile('index.html', { root: __dirname });      
  
});
app.get("/page1", function(request, response){
     
    response.sendFile('page1.html', { root: __dirname });      
  
});
app.get("/page2", function(request, response){
     
    response.sendFile('page2.html', { root: __dirname });      
  
});
app.get("/img/:name", function(request, response){
    var fileName = request.params.name;
      
    
    if (fs.existsSync('img/'+ fileName)) {
        console.log(request.url);
        response.sendFile('img/'+ fileName, { root: __dirname }); 
    }
    else {
        response.sendFile('img/default.jpg', { root: __dirname }); 
    }
});

app.listen(3000);