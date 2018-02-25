import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import api from './api'

const server = express()

// Remove annoying Express header addition.
server.disable('x-powered-by')

// Compress (gzip) assets in production.
server.use(compression())
server.use(
  '/api',
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  api
)

export default server
