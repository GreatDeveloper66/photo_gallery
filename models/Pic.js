import * as mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Pic = new Schema({
  picId: ObjectId,
  url: String
})