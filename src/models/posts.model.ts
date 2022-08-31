import connection from ".././db/mongo";
import { Schema } from "mongoose"

const postSchema = new Schema({
    userId: String,
    postTitle: String,
    postText: String,
    postImage: String,
    postTags: String,
    postUpVotes: Number,
    postDownVotes: Number,
    Spoiler: Boolean,
    Approved: Boolean,
})

var postSchemaa = connection.model("postSchema", postSchema)

export default postSchemaa
