const Express = require('express')

const server = Express()

server.get('/', (req, res) => {
  return res.status(200).json({ response: 'ok' })
})

server.listen(3000)
