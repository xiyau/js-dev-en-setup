import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */

var port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'))


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gamil.com"},
    {"id": 2,"firstName":"Job","lastName":"mith","email":"mith@gamil.com"},
    {"id": 3,"firstName":"Sob","lastName":"mike","email":"mike@gamil.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
