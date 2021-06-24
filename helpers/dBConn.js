import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import mongoose from 'mongoose'
import UserSchema from '../schemas/User.js'
import PicSchema from '../schemas/Pic.js'
import FavoritePic from '../schemas/FavoritePic.js'
import FavoritePicSchema from "../schemas/FavoritePic.js";

class dbConn {
    constructor() {
        const newConnection = mongoose.createConnection(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {dbName:'photo_gallery'})
        this.connection = newConnection
        this.userModel =  newConnection.model('User', UserSchema)
        this.picModel = newConnection.model('Pic', PicSchema)
        this.favoritePicModel = newConnection.model('FavoritePic', FavoritePicSchema)
    }

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
    addFavorite(userId, picId) {
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
}

const newConnection = new dbConn()
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
newConnection.deleteFavoritePic(mongoose.Types.ObjectId('000000216d23583f90779dd1'), mongoose.Types.ObjectId('0000002c6d23583f90779dd2'))
    .then(result => {console.log(result)})
    .catch(err => {console.log(err)})

//newConnection.updatePic('url444','url555')
//newConnection.deletePic('url444')
//newConnection.deletePic('url555')






