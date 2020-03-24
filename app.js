const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//conecting to database
require('./startups/db')();
//routing towards user routes
require('./startups/route')(app);
//seed the database with records
require('./startups/seed')();

app.get('/test',(req,res,next)=>{
    res.send({key:"working.im in.."});
})


let port = process.env.PORT || 5000;
app.listen(port ,()=>{
    console.log(`server running on port ${port}`);
})

