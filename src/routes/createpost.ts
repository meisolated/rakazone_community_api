import { Request, Response, Router } from "express"
import connection from ".././db/mongo";
import postSchemaa from "../models/posts.model";
const createPost = Router()

createPost.post('/createpost' , (req : Request , res : Response) => {
    var post = new postSchemaa({
        userId: req.body.userId,
        postTitle: req.body.postTitle,
        postText: req.body.postText,
        postImage: req.body.postImage,
        postTags: req.body.postTags,
        postUpVotes: 0,
        postDownVotes: 0,
        Spoiler: false,
        Approved: false,
    })
    post.save((err:any, data:any) => {
        if (err) {
            return res.json({ error: 404 })
        }
        return res.json(data)
    }
    )
})

export default createPost;