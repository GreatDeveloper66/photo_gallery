import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import bodyparser from 'body-parser'
import dBConn from './helpers/dBConn.js'
import apiConn from './helpers/apiConn.js'
import User from './models/User.js'


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(express.static(path.join(path.resolve(), "client","build")))

const connection = new dBConn()
const genericUser = new User("genericUser@gmail.com","userNameG","password123$$$")
connection.addUser(genericUser)


app.get('/pics/:searchTerm', (req, res) => {
  let searchTerm = req.params.searchTerm
  const apiConnection = new apiConn()
  apiConnection.search(searchTerm).then(result => {
    res.send(result)
  })
})

app.get('/pic/:id', (req,res) => {
  let id = req.params.id
  const apiConnection = new apiConn()
  apiConnection.getPic(id).then(result => {
    res.send(result)
  })
})



app.get('*', (req,res) => {
  res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})
const port = process.env.PORT || process.env.LOCAL_PORT
app.listen(port, () => console.log(`listening on PORT: ${port}`))