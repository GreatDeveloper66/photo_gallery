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



/*
    addPic(url) {
        const picModel = this.connection.model('Pic', PicSchema)
        const newPic = new picModel()
        newPic.set("url",url)
        return newPic.save()

    }

    deletePic(picUrl) {
        const picModel = this.connection.model('Pic', PicSchema)
        picModel.deleteOne({url: picUrl}).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.connection.close().then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    findPic(picUrl) {
        const picModel = this.connection.model('Pic', PicSchema)
        const foundPic = picModel.findOne({url: picUrl}).exec()
        foundPic.then(result => {
            console.log("foundit" + result._id)
        }).catch(err => {
            console.log("error" + err)
        })
    }

    findPicById(picId) {
        const picModel = this.connection.model('Pic', PicSchema)
        const foundPic = picModel.findOne({_id: picId}).exec()
        foundPic.then(result => {
            console.log("foundit" + result)
        }).catch(err => {
            console.log("error" + err)
        })
    }

    updatePic(oldUrl,newUrl) {
        const picModel = this.connection.model('Pic', PicSchema)
        const pic = picModel.updateOne({url: oldUrl},{url: newUrl}).exec()
        pic.then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    }
    addFavoritePic(userId, picId) {
        const favoritePicModel = this.connection.model('FavoritePic', FavoritePicSchema)
        const favorite = new favoritePicModel()
        favorite.set("userId", userId)
        favorite.set("picId", picId)
        return favorite.save()
    }
    findFavoriteById(favoriteId) {
        const favoritePicModel = this.connection.model('FavoritePic', FavoritePicSchema)
        return favoritePicModel.findOne({_id: favoriteId}).exec()
    }
    deleteFavoritePic(userId, picId) {
        const favoritePicModel = this.connection.model('FavoritePic', FavoritePicSchema)
        return favoritePicModel.findOneAndDelete({userId: userId, picId: picId})
    }

    addUser(email, username, password) {
        const userModel = this.connection.model('User', UserSchema)
        const newUser = new userModel()
        newUser.set("email",email)
        newUser.set("username",username)
        newUser.set("password",password)
        return newUser.save()
    }

    findUserById(userId) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.findOne({_id: userId}).exec()
    }

    updateUserObj(oldUser,newUser) {
        const userModel = this.connection.model('User', UserSchema)
        return userModel.updateOne(
            {email: oldUser.email, userName: oldUser.userName, password: oldUser.password},
            {email: newUser.email, userName: newUser.email, password: newUser.password}).exec()
    }

    updateUser(id, email,userName,password) {
        this.findUserById(id).then(user => {
            const oldUser = user
            const newUser = {email: email, userName: userName, password: password }
            return this.updateUserObj(oldUser,newUser)
        })
    }
    */

}

const newConnection = new dbConn()
newConnection.addUser("gmail@gmail.com","username","pasword")
//newConnection.addPic('url444')
//newConnection.findPic('url444')
//newConnection.findPicById("60d10bc9da19103d5c9b86f5")
/*
newConnection.addFavorite(mongoose.Types.ObjectId(33), mongoose.Types.ObjectId(44)).then(r =>  {
    console.log(r)
}).catch(err => {
    console.log(err)
})

newConnection.findFavoriteById( mongoose.Types.ObjectId('60d3bf646d23583f90779dd3')).then(result => {
    console.log("result" + result)
}).catch(err => {
    console.log(err)
})
*/
//newConnection.deleteFavoritePic(mongoose.Types.ObjectId('000000216d23583f90779dd1'), mongoose.Types.ObjectId('0000002c6d23583f90779dd2'))
    //.then(result => {console.log(result)})
    //.catch(err => {console.log(err)})

//newConnection.updatePic('url444','url555')
//newConnection.deletePic('url444')
//newConnection.deletePic('url555')






