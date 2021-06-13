import * as mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = new Schema({
  userId: ObjectId,
  email: String,
  userName: String,
  password: String
})