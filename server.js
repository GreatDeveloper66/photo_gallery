import express from 'express'
import dotenv from 'dotenv'
import unsplash from 'unsplash-js'
dotenv.config()
import path from 'path'
import bodyparser from 'body-parser'
import nodeFetch from 'node-fetch';
import Parser from './helpers/Parser.js'
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

//app.get('/', (req,res) => res.send('Hello World'))
/*
const serverApi = unsplash.createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  apiUrl: process.env.APIURL,
  fetch: nodeFetch
})

let catPictures = []

serverApi.search.getPhotos({
  query: 'cat',
  page: 1,
  perPage: 10,
  color: 'green',
  orientation: 'portrait',
}).then(response => {
    const catPics = new Parser(response)
    console.log(catPics.getFullPics())
    catPictures = catPics.getFullPics()
});
*/



app.get('/catPics', (req, res) => {
  const apiConnection = new apiConn()
  console.log(apiConnection)
  let catPictures = apiConnection.search('cats')
  res.send(catPictures)
})

app.get('*', (req,res) => {
  res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})
const port = process.env.PORT || process.env.LOCAL_PORT
app.listen(port, () => console.log(`listening on PORT: ${port}`))