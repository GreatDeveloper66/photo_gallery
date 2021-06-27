import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import bodyparser from 'body-parser'
import dBConn from './helpers/dBConn.js'
import apiConn from './helpers/apiConn.js'
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(express.static(path.join(path.resolve(), "client","build")))

const connection = new dBConn()

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) {
    return res.sendStatus(401)
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) => {
    if(err) {
      return res.sendStatus(403)
    } else {
      req.user = user
      next()
    }
  })

}

app.post('/login', (req,res) => {
  const username = req.body.username
  const password = req.body.password
  connection.loginUser(username, password).then(foundUser => {
    const id = foundUser.get("_id")
    const user = {userId: id }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m'})
    connection.addToken(accessToken).then(() => {
      res.send({ accessToken: accessToken })
    }).catch(() => {
      res.sendStatus(401)
    })

  }).catch(() => {
    res.sendStatus(401)
  })
})

app.delete('/logout', (req,res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  connection.deleteToken(token).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(500)
  })
})

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

app.get('/user/:id', authenticateToken, (req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  connection.findUser(id).then(foundUser => {
    res.send(foundUser)
  }).catch(err => {
    res.send(err)
  })
})

app.post('/users',(req,res) => {
  connection.addUser(req.body.email, req.body.username, req.body.password).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(400)
  })
})

app.patch('/users/:id',authenticateToken, (req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  const newUser = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }
  connection.findUser(id).then(result => {
    connection.updateUser(result, newUser).then(() => {
      res.sendStatus(200)
    }).catch(() => {
      res.sendStatus(400)
    })
  }).catch(() => {
    res.sendStatus(400)
  })
})

app.delete('/users/:id', authenticateToken, (req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  connection.deleteUser(id).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(400)
  })
})

app.get('/users/:id/favorites', authenticateToken, (req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  connection.findUser(id).then(foundUser => {
    const photos = foundUser.get("photos")
    res.send({status: 200, photos: photos})
  }).catch(err => {
    res.send(err)
  })
})

app.patch('/users/:id/favorites/:url', authenticateToken,(req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  const photoUrl = req.params.url
  connection.findUser(id).then(foundUser => {
    let newUser = foundUser
    let foundPhotos = newUser.get("photos")
    foundPhotos = [...foundPhotos, photoUrl]
    newUser.set("photos", foundPhotos)
    newUser.save().then(() => {
      res.sendStatus(200)
    }).catch(err => {
      res.send(err)
    })
  }).catch(err => {
    res.send(err)
  })
})

app.patch('/users/:id/unfavorites/:url',authenticateToken,(req,res) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  const photoUrl = req.params.url
  connection.findUser(id).then(foundUser => {
    let newUser = foundUser
    let foundPhotos = newUser.get("photos")
    foundPhotos = foundPhotos.filter(elem => elem !== photoUrl)
    newUser.set("photos", foundPhotos)
    newUser.save().then(() => {
      res.sendStatus(200)
    }).catch(err => {
      res.send(err)
    })
  }).catch(err => {
    res.send(err)
  })
})

app.get('*', (req,res) => {
  res.sendFile(path.join(path.resolve(), "client", "build", "index.html"))
})
const port = process.env.PORT || process.env.LOCAL_PORT
app.listen(port, () => console.log(`listening on PORT: ${port}`))