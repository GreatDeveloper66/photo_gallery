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
        const userModel = newConnection.model('User', UserSchema)
        const picModel = newConnection.model('Pic', PicSchema)
        const favoritePicModel = newConnection.model('FavoritePic', FavoritePicSchema)

        this.connection = newConnection
        this.user =  new userModel()
        this.pic = new picModel()
        this.favorite = new favoritePicModel()
    }

    addPic(url) {
        this.pic.set("url",url)

        this.pic.save().then(savedDoc => {
            console.log(savedDoc)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            mongoose.disconnect()
        })

    }

    deletePic(url) {
        this.pic.set("url",url)
        this.pic.deleteOne()
    }

}

const newConnection = new dbConn()
console.log('hello')
newConnection.deletePic('url3333')

/*
class dbConn {
    start() {
        mongoose.connect(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            userCreateIndex: true
        })
    }
    addPic(url) {
        this.start()
        const newPic = new PicModel()
        newPic.set("url",url)
        newPic.save().then(savedDoc => {
            console.log(savedDoc)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            mongoose.disconnect()
        })
    }

}

const newConnection = new dbConn()
newConnection.addPic('url22')
*/



