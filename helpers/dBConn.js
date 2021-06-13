import dotenv from 'dotenv'
dotenv.config({path: '../.env' })
import MongoClient from "mongodb"

class dbConn {
    constructor() {
        this.connection = MongoClient.MongoClient
    }

    async dbConnect() {
        let hello = 0
       await this.connection.connect(process.env.MONGODB_LOCAL_CONN || process.env.MONGODB_REMOTE_CONN, { useNewUrlParser: true }, (err, client) => {
            if(err) {
                hello = -1
            } else {
                const db = client.db(process.env.DB_NAME)
                //const collection = db.collection(collectionName)
                hello = 1
            }
       })````````

        return hello
    }






}

export default dbConn








