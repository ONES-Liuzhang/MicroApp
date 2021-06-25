const express = require("express")
const http = require("http")

const app = express()

const server = http.createServer(app)

app.use(express.static('./dist'))

server.listen(5000, () => {
  console.log("server now listening on 5000")
});