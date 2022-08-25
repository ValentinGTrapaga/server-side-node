const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Welcome to our homepage')
        res.end()
    }
    res.end(`
        <h1>Oops, err 404</h1>
        <a href='/'>Go back home!</a>
    `)
})

server.listen(5000)