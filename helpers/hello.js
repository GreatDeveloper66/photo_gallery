console.log("hello")
import dotenv from 'dotenv'
dotenv.config()
const connectionString = process.env.MONGODB_LOCAL_CONN || process.env.MONGODB_REMOTE_CONN
import MongoClient from "mongodb"
const client = MongoClient.MongoClient
const url = 'mongodb://127.0.0.1:27017'
//const db = MongoClient.Db
//const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.txtwh.mongodb.net/test?authSource=admin&replicaSet=atlas-zu1pym-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const dbName = 'photo_gallery'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})
