// http is looking for a call back with two parameters
const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is the about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> Houston we have a problem!</p>
    <a href='/'>Home</a>
    `)
})

server.listen(5000)