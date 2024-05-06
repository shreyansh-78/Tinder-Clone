const mongoose = require("mongoose");

mongoose.connect(process.env.URI).then(() => {
    console.log("Connected to database")
}).catch((err) => { console.log(err.message) })