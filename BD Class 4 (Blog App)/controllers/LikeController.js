// import the like model
const Like = require('../models/likeModel');
const Post = require('../models/postModel');


// Like ka post
exports.likePost = async(req, res) => {
    try{
        // fetch data from req body & make object 
        const {post, user} = req.body;
        const like = new Like({
            post, user
        });
        // insert into DB
        const savedLike = await like.save();

        // update the post coolections basis on savedLike
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}}, {new: true})
                            .populate("likes").exec();

        res.json({
            post:updatedPost
        });

    }
    catch(error){
        return res.status(500).json({
            error:"Error while Liking Post",
        })
    }
}

// Unlike Controller
exports.unlikePost = async(req, res) => {
    
    try{
        // fetch post(id) & like(id) from req
        const {post, like} = req.body;

        // find and delete the like(id) from collection 'Like'
        const deletedLike = await  Like.findOneAndDelete({post:post, _id:like});

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull:{likes:deletedLike._id}}, {new:true});

        // send the response
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while Unliking Post",
        })
    }
}



exports.dummyLink = async(req, res) => {
    
    return res.send("This is Home Page!");

}