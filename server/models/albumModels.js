const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required:[true, 'Album name is required'],
        minLength:[3, 'The Album name must be 3 or more characters'],
        maxLength:[50, 'The Album name is too long']
    },
    artist: {
        type: String,
        required:[true, 'Artist Name is required'],
        minLength:[3, 'The Artist Name must be 3 or more characters'],
        maxLength:[50, 'The Artist Name is too long']
    },
    releaseYear: {
        type: Number,
        min:[1920, 'No albums before 1920 allowed']
    },
    genre: {
        type: String,
        required:[true, 'Genre is required'],
        minLength:[3, 'The genre must be 3 or more characters'],
        maxLength:[50, 'The genre is too long']
    },
    explicit:{
        type: Boolean,
        required:[true, 'You must fill this out']
    },
    user_id: {
        type:mongoose.Types.ObjectId
    }
}, {timestamps:true})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album