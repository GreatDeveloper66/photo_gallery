import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import mongoose from 'mongoose'
import UserSchema from '../schemas/User.js'
//import PicSchema from '../schemas/Pic.js'
//import FavoritePic from '../schemas/FavoritePic.js'
//import FavoritePicSchema from "../schemas/FavoritePic.js";

class dbConn {
    constructor() {
        const newConnection = mongoose.createConnection(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {dbName:'photo_gallery'})
        this.connection = newConnection
        this.userModel =  newConnection.model('User', UserSchema)
        //this.picModel = newConnection.model('Pic', PicSchema)
        //this.favoritePicModel = newConnection.model('FavoritePic', FavoritePicSchema)
    }

    addUser(email, username, password) {
        const userModel = this.connection.model('User', UserSchema)
        const newUser = new userModel()
        newUser.set("username",username)
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

    updateUser(userId, newUser) {
        const userModel = this.connection.model('User', UserSchema)
        this.findUser(userId).then(foundUser => {
            userModel.updateOne(foundUser,newUser).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }

    addFavorite(userId, url) {
        const userModel = this.connection.model('User', UserSchema)
        this.findUser(userId).then(foundUser => {
            let newUser = foundUser
            let foundPhotos = newUser.get("photos")
            foundPhotos = foundPhotos.push(url)
            newUser.set("photos",foundPhotos)
            userModel.updateOne(foundUser,newUser)
        })
    }

    removeFavorite(userId, url) {
        const userModel = this.connection.model('User', UserSchema)
        this.findUser(userId).then(foundUser => {
            let newUser = foundUser
            let foundPhotos = newUser.get("photos")
            foundPhotos = foundPhotos.filter(element => element !== url)
            newUser.set("photos",foundPhotos)
            userModel.updateOne(foundUser,newUser)
        })
    }




}

const newConnection = new dbConn()









