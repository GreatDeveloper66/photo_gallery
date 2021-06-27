import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const TokenSchema = new Schema({
    userId: ObjectId,
    token: String
})

export default TokenSchema