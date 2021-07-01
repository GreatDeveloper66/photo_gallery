import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import mongoose from 'mongoose'
import UserSchema from '../schemas/User.js'
import TokenSchema from '../schemas/Token.js'
import jwt from "jsonwebtoken";

class dbConn {
    constructor() {
        this.connection = mongoose.createConnection(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {dbName: 'photo_gallery'})
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
        return userModel.findOne({username: username, password: password }).exec().then(foundUser => {
            const userId = foundUser.get("_id")
            const accessToken = jwt.sign({id: userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '20m'})
            return accessToken
        }).catch(err => {
            console.log("error  " + err)
            return err
        })
    }

    addToken(accessToken) {
        const tokenModel = this.connection.model('Token', TokenSchema)
        const newToken = new tokenModel()
        newToken.set("accessToken",accessToken)
        return newToken.save().then(accessToken => {
            return {"accessToken": accessToken.get("accessToken")}
        }).catch(err => {
            return err
        })
    }

    deleteToken(token) {
        const tokenModel = this.connection.model('Token', TokenSchema)
        return tokenModel.deleteOne({token: token})
    }
}

export default dbConn





