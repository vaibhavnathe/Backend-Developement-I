// Import Mongoose
const mongoose = require('mongoose');


// Route Handler
const commentSchema = new mongoose.Schema({

    // post -> konsi post pe comment kiya hai
    post:{
        type: mongoose.Schema.Types.ObjectId, // id ko refer kar rahe hai
        ref: "Post", // refernce to the POst model
    },

    // user -> kis user ne comment kiya hai
    user:{
        type: String,
        required: true,
    },

    // comment -> kya comment kiya hai
    body:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Comment", commentSchema);