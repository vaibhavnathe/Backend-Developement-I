const Post = require('../models/postModel');

exports.createPost = async(req, res) => {

    try{
        // fetch the data from req body
        const {title, body} = req.body;
        // create object 
        const post = new Post({
            title, body,
        })

        // save object into DB
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });       

    }
    catch(error){
        return res.status(400).json({
            error:"Error While Creating Post"
        })
    }
};

// need some more testing after completing the like wala controller
exports.getAllPosts = async(req, res) => {

    try{

        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })

    }
    catch(error){
        return res.status(400).json({
            error:"Error While Fetching Post"
        })
    }
}