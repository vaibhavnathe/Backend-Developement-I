// Import models
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Business Logic

exports.createComment = async(req,res) => {

    try{
        // fetch data from req body
        const {post, user, body} = req.body;
        // create comment object ,  post->id
        const comment = new Comment({
            post,user,body
        });
 
        // save the new comment into the database -> use save/create function
        const savedComment = await comment.save();

        // find the Post by ID , add the new comment (savedComment -> id) to its comment array
        // basically -> find the Post basis on id(post) & add it to the array of comments in main Post
        const updatedPost =await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments")    // populate the comments array with comment document
                            .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while Creating Comment",
        })
    }
}