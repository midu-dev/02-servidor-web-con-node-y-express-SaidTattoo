const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>¡Hola mundo!</h1>')
})

app.get('/logo.webp', (req, res) => {
  const filePath = path.join(__dirname, 'assets', 'logo.webp')
  res.sendFile(filePath)
})

app.get('/404', (req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.post('/contacto', (req, res) => {
  res.status(201).json(req.body)
})

app.all('*', (req, res) => {
  res.status(405).send('Method Not Allowed')
})

const startServer = (port = process.env.PORT || 1234) => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

  return server
}

module.exports = { startServer }
