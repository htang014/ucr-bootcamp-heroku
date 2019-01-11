var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    console.log('hello world');
    res.send('hello world');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});