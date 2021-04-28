import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req,res) => res.send('Hello World'))
const port = process.env.PORT
app.listen(port, () => console.log(`listening on PORT: ${port}`))