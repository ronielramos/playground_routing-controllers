import { config } from 'dotenv'

import app from './app'
import createDbConnection from './database'
import { Server } from 'http'

config()

;(async () => {
  try {
    await createDbConnection()
    const server: Server = app.listen(process.env.PORT, () => console.log('LISTENING ON ', server.address()))
  } catch (error) {
    console.error(error)
  }
})()

process.on('unhandledRejection', (reason, promise) => {
  console.log(reason)
  console.log(promise)
})
