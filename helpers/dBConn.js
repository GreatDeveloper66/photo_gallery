import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import mongoose from 'mongoose'
import UserSchema from '../schemas/User.js'

class dbConn {
    constructor() {
        const newConnection = mongoose.createConnection(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {dbName: 'photo_gallery'})
        this.connection = newConnection
        this.userModel = newConnection.model('User', UserSchema)
        //this.picModel = newConnection.model('Pic', PicSchema)
        //this.favoritePicModel = newConnection.model('FavoritePic', FavoritePicSchema)
    }

    addUser(email, username, password) {
        const userModel = this.connection.model('User', UserSchema)
        const newUser = new userModel()
        newUser.set("username", username)
        newUser.set("email", email)
        newUser.set("password", password)
        return newUser.save()
    }

    findUser(userId) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.findOne({_id: userId}).exec()
    }


    deleteUser(userId) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.deleteOne({_id: userId})
    }

    updateUser(oldUser, newUser) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.updateOne(oldUser,newUser)
    }

    loginUser(username, password) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.findOne({username: username, password: password }).exec()
    }
}

export default dbConn





