import * as mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = new Schema({
  email: ObjectId,
  userName: String,
  password: String
})