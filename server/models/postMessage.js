// This file is used to create a template model for how each message post should look like. 

import mongoose from 'mongoose'; 

const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String,
    tags: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number,
        default: 0, 
    }, 
    createdAt: { 
        type: Date, 
        default: new Date(), 
    }, 
})

const PostMessage = mongoose.model('PostMessage', postSchema); 

export default PostMessage; 