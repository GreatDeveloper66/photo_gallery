import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  userId: ObjectId,
  email: String,
  userName: String,
  password: String
})

export default UserSchema
