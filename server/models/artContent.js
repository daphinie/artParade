import mongoose from 'mongoose';

const artSchema = mongoose.Schema({
    artist: String,
    caption: String,
    tags: [String],
    artFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var ArtContent = mongoose.model('ArtContent', artSchema);

export default ArtContent;