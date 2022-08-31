import connection from ".././db/mongo";
import { Schema } from 'mongoose';


const postVotesSchema = new Schema({
    userId: String,
    postId : String,
    which_vote : Boolean // 0 for downvote and 1 for upvote
    
})

var postVotesSchemaa = connection.model('postVotesSchema' , postVotesSchema)

export default postVotesSchemaa;