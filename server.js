const express = require('express')
const pages = require('./pages')
const app = express()

const paths = Object.keys(pages)

paths.forEach(path => {
  app.get(path, (req, res) => {
    const file = pages[path]
    res.sendFile(__dirname + file)
  })
})
app.use(express.static('static'))

app.listen('3000')
