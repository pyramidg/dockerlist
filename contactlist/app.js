// importing modules  https://www.youtube.com/watch?v=wtIvu085uU0  35min pickup
var express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route')




//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist', { useMongoClient: true });

// on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error on Database connection:'+err);
    }

});

//port no
const port = 3000;

//adding middleware
app.use(cors());

// body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/',(req, res)=>{
    res.send('footer');
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});
