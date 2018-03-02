import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'

const server = express()

// Remove annoying Express header addition.
server.disable('x-powered-by')

// Compress (gzip) assets in production.
server.use(compression())

if (process.env.K9_TARGET !== 'FRONT') {
  server.use(
    '/api',
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    require('./api').default
  )
}

export default server
