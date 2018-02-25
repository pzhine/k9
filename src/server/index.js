import server from './front'

const port = process.env.PORT || parseInt(KYT.SERVER_PORT, 10)

server.listen(port, () => {
  console.log(`✅  server started on port: ${port}`) // eslint-disable-line no-console
})
