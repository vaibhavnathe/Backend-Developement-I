// import the model
const Todo = require("../models/todo");



// write a function that fetch the data from the database
// define route handler
exports.getTodo = async(req, res) => {

    try{
        // fetch all todo items from the database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
        });

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}

exports.getTodoById = async(req, res) => {

    try{
        // extract todo basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // data for given id is NOT FOUND
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Not Data Found with given id",
            })
        }
        // data for given id is FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}