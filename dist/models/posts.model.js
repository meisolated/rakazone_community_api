"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require(".././db/mongo"));
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    userId: String,
    postTitle: String,
    postText: String,
    postImage: String,
    postTags: String,
    postUpVotes: Number,
    postDownVotes: Number,
    Spoiler: Boolean,
    Approved: Boolean,
});
var postSchemaa = mongo_1.default.model("postSchema", postSchema);
exports.default = postSchemaa;
