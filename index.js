var express = require('express');
var app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World');
});
app.get('/user/:id', (req, res, next) => {
  res.send(`${req.params.id} user page.`);
});

app.listen(process.env.PORT || 8080, ()=> {
  console.log('Started...');
});