import * as mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const FavoritePic = new Schema({
    id: ObjectId,
    picId: ObjectId,
    userId: ObjectId
})