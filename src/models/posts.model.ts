import connection from "db/mongo";
import { Schema, model, connect } from 'mongoose';


const postSchema = new Schema({
    userId : {
        type : String,
        postTitle : String,
        postText : String,
        postImage : String,
        postTags : String,
        postUpVotes : Number,
        postDownVotes : Number,
        Spoiler : Boolean,
        Approved : Boolean
    }
})