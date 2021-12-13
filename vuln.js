const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  console.log("url:", req.url);
  eval(req.url);
  console.log('headers:', req.headers);
  console.log('body:', req.body);

  next();
});

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin',"*");
        next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(function(req,res,next) {
        res.write('deafult message');
        res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
