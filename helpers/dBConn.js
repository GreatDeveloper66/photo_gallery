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

        newPic.save().then(savedDoc => {
            console.log(savedDoc)
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
            console.log("foundit" + result)
        }).catch(err => {
            console.log("error" + err)
        })
    }
}

const newConnection = new dbConn()
console.log('hellooo')
newConnection.addPic('url3333')
newConnection.findPic('url3333')

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



