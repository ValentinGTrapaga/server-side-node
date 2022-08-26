const http = require('http')
const PORT = 5000

const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>Hello!</h1></body></html>')
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
