const express = require("express")
const postModel = require("../models/posts")
const postRouter = express.Router()

postRouter.post('/', (req, res, next) => {
    const post = new postModel({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then( createdPost => {
        console.log(createdPost.id)
        res.status(200).json(
            {
                message: "post added sucessfully",
                postId: createdPost._id
            }
        )
    })
})
module.exports = postRouter;