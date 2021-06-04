import dotenv from 'dotenv'
dotenv.config()
import MongoClient from "mongodb"

export default class dBConn {
  constructor() {
  }

  async connect(collectionName, payLoad, operation) {
    console.log('hello')
    //const db = MongoClient.Db
    //const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.txtwh.mongodb.net/test?authSource=admin&replicaSet=atlas-zu1pym-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
    await MongoClient.MongoClient.connect(process.env.MONGODB_LOCAL_CONN || process.env.MONGODB_REMOTE_CONN, { useNewUrlParser: true }, (err, client) => {
      if (err) return console.log(err)
      // Storing a reference to the database so you can use it later
      
      const db = client.db(process.env.DB_NAME)
      const collection = db.collection(collectionName)
      //operation: add - insertOne, delete - 
      switch (operation) {
        case 'add':
          //collection.insertOne(payLoad)
          console.log('adding')
          break;
        case 'update':
          //collection.updateOne(payLoad)
          console.log('updating')
          break;
        case 'delete':
          //collection.deleteOne(payLoad)
          console.log('deleting')
          break;
        case 'find':
          //collection.findOne(payLoad)
          console.log('finding')
          break;
        default:
          
      }
      client.close()
    })
  }

  addUser(payLoad) {
    this.connect(process.env.USER_COLLECTION, payLoad, 'add')
  }

  addPhoto(payLoad) {
    this.connect(process.env.PIC_COLLECTION, payLoad,'add')
  }

  addFavorite(payLoad) {
    this.connect(process.env.FAVORITES_COLLECTION, payLoad,'add')
  }


  removeUser(payLoad) {
    this.connect(process.env.USER_COLLECTION, payLoad,'delete')
  }

  removePhoto(payLoad) {
    this.connect(process.env.PIC_COLLECTION, payLoad,'delete')
  }

  removeFavorite() {
    this.connect(process.env.FAVORITES_COLLECTION, payLoad,'delete')
  }

  updateUser() {
    this.connect(proecess.env.USER_COLLECTION, payLoad, 'update')
  }

  updatePhoto() {
    this.connect(process.env.PIC_COLLECTION, payLoad, 'update')
  }

  findUser() {
    this.connect(process.env.PIC_COLLECTION, payLoad,'find')
  }

  findPhoto() {
    this.connect(process.env.PIC_COLLECTION, payLoad,'find')
  }

  findFavorite() {
    this.connect(process.env.PIC_COLLECTION, payLoad,'find')
  }
}








