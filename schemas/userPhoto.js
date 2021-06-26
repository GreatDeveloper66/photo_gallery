
import mongoose from "mongoose";
//import PhotoSchema from "./Photo";
import PhotoSchema from './Photo.js'


const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserPhotoSchema = new Schema({
    userId: ObjectId,
    email: String,
    userName: String,
    password: String,
    photos: [PhotoSchema]
})

export default UserPhotoSchema