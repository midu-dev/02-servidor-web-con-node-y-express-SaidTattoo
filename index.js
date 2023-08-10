const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 1234

function startServer () {
  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`)

    if (req.method === 'GET') {
      switch (parsedUrl.pathname) {
        case '/':
          res.setHeader('Content-Type', 'text/html')
          res.write('<h1>¡Hola mundo!</h1>')
          res.end()
          break
        case '/logo.webp':
          fs.readFile('./assets/logo.webp', (err, data) => {
            if (err) {
              res.writeHead(500)
              res.end()
            } else {
              res.writeHead(200, { 'Content-Type': 'image/webp' })
              res.end(data)
            }
          })
          break
        case '/404':
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.write('<h1>404</h1>')
          res.end()
          break
        default:
          res.writeHead(404)
          res.end()
      }
    } else if (req.method === 'POST' && parsedUrl.pathname === '/contacto') {
      let body = ''

      req.on('data', chunk => {
        body += chunk.toString()
      })

      req.on('end', () => {
        const parsedBody = JSON.parse(body)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(parsedBody))
      })
    } else {
      res.writeHead(405)
      res.end()
    }
  })

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })

  return server
}

module.exports = {
  startServer
}
