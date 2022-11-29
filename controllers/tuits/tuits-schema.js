import mongoose from 'mongoose';            // load the mongoose library
const schema = mongoose.Schema({    // create the schema
    topic:String,
    userName: String,
    time : String,
    title: String,
    image: String,
    replies: Number,
    retuits: Number,
    handle: String,
    dislikes: Number,
    disliked: Boolean,
    tuit: String,                           // tuit property of type String
    likes: Number,                          // likes property of type Number
    liked: Boolean,                         // liked property
}, {collection: 'tuits', versionKey: false});
export default schema;                      // export schema so it can be used elsewhere
