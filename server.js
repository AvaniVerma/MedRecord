const express = require('express');
const app = express();
const port = 3456 || process.env.port;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');

// Landing page
app.use('/', express.static(__dirname + '/public_static'));

// 404 Handler
app.use((req,res) => res.render('error'));

// Server started
app.listen(port, ()=>console.log(`Server started at ${port}`));