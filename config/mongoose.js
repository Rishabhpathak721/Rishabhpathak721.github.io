const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/Codeial_development');

 const db = mongoose.connection;

 db.on('error',console.error.bind(console, "Eroor connecting to MongoDB"));

 db.once('open',function(){

    console.log('Connected to database : : mongoDB');
 });

 module.exports=db;