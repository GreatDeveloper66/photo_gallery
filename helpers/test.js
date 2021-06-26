import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import mongoose from 'mongoose'
import UserSchema from '../schemas/User.js'


const newConnection = mongoose.createConnection(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {dbName:'photo_gallery'})
const newUserModel = newConnection.model('User', UserSchema)


const newUser = new newUserModel()
newUser.set("userame","newuser")
newUser.set("email","email")
newUser.set("password","password")
const arr = ["url1","url2"]
newUser.set("photos",arr)

console.log(newUser)

let foundPhotos = newUser.get("photos")
console.log(foundPhotos)
foundPhotos = foundPhotos.filter(element => element !== "url1")
newUser.set("photos", foundPhotos)
console.log(newUser.get("photos"))


