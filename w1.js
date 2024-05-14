const http = require('http')
const port = 80

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server! - W1')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened - W1', err)
  }
  console.log(`server is listening on ${port}`)
})