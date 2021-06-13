import * as mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const FavoritePicSchema = new Schema({
    id: ObjectId,
    picId: ObjectId,
    userId: ObjectId
})

const FavoritePicModel = mongoose.model('FavoritePic',FavoritePicSchema)


export default FavoritePicModel