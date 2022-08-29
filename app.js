const express = require('express')
const http = require('http')

const app = express()

const port = 5000

app.use((req, res, next) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>This is an express server</h1></body></html>')
})

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
