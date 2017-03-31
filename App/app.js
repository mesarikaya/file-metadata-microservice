'use strict';

module.exports = function(app, upload) {

    app.post('/upload', upload.single('file'), function (req, res, next) {
    // req.body contains the text fields
        if (req.file){
            res.send({"File name":req.file.originalname, "Size":req.file.size});
        }
        else{
            var err = "this is not a valid file. Please return back and upload a valid file."
            throw err
        }
        
    })
    // Check home page on open
    app.get('/', function (req, res) {
        res.sendFile(process.cwd() + '/Public/index.html');
    })
    
};