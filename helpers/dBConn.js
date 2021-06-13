import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGO_LOCAL_CONN || process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    userCreateIndex: true
})