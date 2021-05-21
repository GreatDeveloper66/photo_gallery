import express from 'express'
import dotenv from 'dotenv'
import unsplash from 'unsplash-js'
dotenv.config()
import path from 'path'
import bodyparser from 'body-parser'
import nodeFetch from 'node-fetch';
import Parser from './helpers/Parser.js'

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(express.static(path.join(path.resolve(), "client","build")))

//app.get('/', (req,res) => res.send('Hello World'))
const serverApi = unsplash.createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  apiUrl: process.env.APIURL,
  fetch: nodeFetch
})

serverApi.search.getPhotos({
  query: 'cat',
  page: 1,
  perPage: 10,
  color: 'green',
  orientation: 'portrait',
}).then(response => {
    const catPics = new Parser(response)
    console.log(catPics.getFullPics())
});


app.get('*', (req,res) => {
  res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})
const port = process.env.PORT || process.env.LOCAL_PORT
app.listen(port, () => console.log(`listening on PORT: ${port}`))