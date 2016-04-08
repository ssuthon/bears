var express = require('express'); 
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser'); 

app.use(express.static(__dirname + '/public')); 
  
var bears = []; 
  
router.route('/bears') 
  .post(function(req, res) { 
    var bear = {}; 
    bear.name = req.body.name; 
    bears.push(bear); 
    res.json({ message: 'Bear created!' }); 
  })
  .get(function(req, res){
  	 res.json(bears);
  }) 
  
// all of our routes will be prefixed with /api 
app.use('/api', bodyParser.json(), router); 
app.listen(8000);