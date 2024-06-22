// import the model
const Todo = require("../models/todo")

// define handler
exports.createTodo = async(req, res) => {

    try{
        // extract title and desc from request body -> for that we used 'express.json() middleware'
        const {title, description} = req.body;
        // create new Todo object & insert into the DB
        const response = await Todo.create({title, description});
        // send a json response with a succes flag
        res.status(200).json(
            {
                success : true,
                data : response,
                message : "Entry created Successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data : "Internal Server Error",
                message : err.message,
            }
        )
    }
}
