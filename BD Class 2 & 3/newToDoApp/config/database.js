const mongoose = require('mongoose');       // connection between node js application and DB using mongoose

require('dotenv').config();      // to feed the DATABASE_URL from process object we need to install 'dotenv'
                                // after importing -> all things in .env file all are load into the process object.

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connection is Successful."))
    .catch((error) => {
        console.log("Issue in DB Connection.");
        console.error(error.message);
        process.exit(1);        // iska matlb kya hai , find karo?
    });
}

module.exports = dbConnect;