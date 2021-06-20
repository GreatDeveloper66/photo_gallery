import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const FavoritePicSchema = new Schema({
    id: ObjectId,
    picId: ObjectId,
    userId: ObjectId
})

export default FavoritePicSchema