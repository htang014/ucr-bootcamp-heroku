var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('hello world');
});

app.listen(3000, ()=>{console.log("we are listening on port 3000!")});