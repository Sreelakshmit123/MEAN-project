const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION_STRING
mongoose.connect(connectionString).then((res)=>{
    console.log("style Guri Server Successfully connected with MongoDB Atlas");
}).catch((reason)=>{
    console.log("MongoDB Conncetion Failed");
    console.log(reason);
})