import { Request, Response, Router } from "express"

import postVotesSchemaa from "../models/postVotes.model";
const vote = Router()

vote.post('/vote' , (req : Request , res : Response) => {
    var post = new postVotesSchemaa({
        userId: req.body.userId,
        postId : req.body.postId,
        which_vote : req.body.which_vote
    })
    post.save((err:any, data:any) => {
        if (err) {
            return res.json({ error: 404 })
        }
        return res.json(data)
    }
    )
})

export default vote;