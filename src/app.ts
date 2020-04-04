import 'reflect-metadata' // this shim is required
import { ProductController } from './Product/ProductController'
import { ProviderController } from './Provider/ProviderController'
import { Container } from 'typedi'
import { useExpressServer, createExpressServer } from 'routing-controllers'
import { useContainer } from 'class-validator'
import compression = require('compression')

useContainer(Container)

const app = createExpressServer({
  cors: true,
  controllers: [ProductController, ProviderController]
})

app.use(compression())

// run express application on port 3000
export default app
