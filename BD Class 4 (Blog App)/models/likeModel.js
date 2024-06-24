// Import Mongoose
const mongoose = require('mongoose');

// Router Handler
const likeSchema = new mongoose.Schema({
    
    // konse post pe like kar rahe ho
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },

    // kisne like kiya hai
    user: {
        type: String,
        required: true,
    }
});

// export
module.exports = mongoose.model("Like", likeSchema);