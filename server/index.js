const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

app.use(cors());

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var bicycles = [
  {id: 1, brand: "BH", model: "Star"}, 
  {id: 2, brand: "Orbea", model: "Skyline"},
  {id: 3, brand: "BMX", model: "BMX"}
];

app.get('/', function(req, res) {
  res.send('Hello, world.');
});

app.get('/bicycles', function(req, res) {
  res.send(bicycles);
});

app.post('/bicycle', function (req, res){
  bicycles.push({
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model
  });
  res.send(bicycles);
});

app.delete('/bicycle/:bicycle_id', function(req, res) {
  let bicycle = bicycles.find({ id: req.param.bicycle_id });
  bicycle.remove();
  res.send(bicycles);
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
