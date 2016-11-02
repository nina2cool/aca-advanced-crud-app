const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Write your PostModel schema here
// Hint: Don't forget to export it!

const postSchema = new Schema({
    'author': String,
    'post_body': String,
    'date': {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('post', postSchema);
