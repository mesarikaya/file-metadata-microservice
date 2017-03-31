'use strict';
//CSEId: 005229907790370133154:o3q1t7yjhee
var express = require('express');
var app = express();
var api = require('./App/app.js');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

//Set the html 
app.use(express.static(__dirname + "/../Public"));
    
//call the app
api(app, upload);
    
var port = process.env.PORT || 8000;
    
app.listen(port, function() {
        console.log('Node.js listening on port ' + port);
});


