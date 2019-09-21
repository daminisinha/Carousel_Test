const express = require('express');
const app = express();

// Serving public folder
app.use(express.static('public'));

//Serving 'index.html' file
app.get('*',(req,res)=>{
    res.sendFile('index.html')
})

//Server started at port 3000
app.listen(3000, function () {
  console.log('App started on port 3000');
});