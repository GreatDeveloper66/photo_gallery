import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  userId: ObjectId,
  email: String,
  username: String,
  password: String,
  photos: []
})

export default UserSchema
