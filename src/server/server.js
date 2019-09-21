const express = require('express');
const path = require('path');
const app = express();

// Serving public folder
app.use(express.static('public'));

//Serving 'index.html' file
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../../public','index.html'))
})

//Server started at port 3000
app.listen(3000, function () {
  console.log('App started on port 3000');
});