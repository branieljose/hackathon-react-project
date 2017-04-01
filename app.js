var express = require('express');
var Data = require('./models/Data.js')["Data"];
var app = express();

app.all('*',function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();}
);


app.get('/data', function (req, res) {
  //res.sendFile('data.json', {root: __dirname })
  Data.find({}).exec(function(err, data){
       if(err){
         console.log(err);
      }
      else{
        console.log("Success..")
          res.send(data);
        }
    });

  //  Data.find().then(function(err,data) {
  //    console.log(data);
  //  });
});

// POST method route
app.post('/data', function (req, res) {
  res.sendFile('data.json', {root: __dirname })
});

console.log("hello world!");
app.listen(8080);
