import { createServer } from 'http'
import { healthPayload } from './health.js'

const hostname = '127.0.0.1'
const port = '3000'

const server = createServer((req, res) => {
  const { url, method } = req
  
  if (method !== 'GET') {
    res.statusCode = 405
    res.end('Not Found')
    return
  }

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Hello Guys!')
    return
  }

  if (url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(healthPayload()))
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Not Found')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})