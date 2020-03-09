import { config } from 'dotenv'

import app from './app'
import createDbConnection from './database'

config()

;(async () => {
  try {
    await createDbConnection()
    const server = app.listen(process.env.PORT, () => console.log('LISTENING ON ', server.address()))
  } catch (error) {
    console.error(error)
  }
})()
