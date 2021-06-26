import mongoose from 'mongoose';

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const PhotoSchema = new Schema({
    photoId: ObjectId,
    url: String
})

export default PhotoSchema