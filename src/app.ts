import 'reflect-metadata' // this shim is required
import { createExpressServer } from 'routing-controllers'
import { ProductController } from './Product/ProductController'
import { ProviderController } from './Provider/ProviderController'
import { useContainer } from 'class-validator'
import { Container } from 'typedi'
import helmet = require('helmet');
import compression = require('compression');

useContainer(Container)

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  cors: true,
  controllers: [ProductController, ProviderController]
})

app.use(helmet())
app.use(compression())

// run express application on port 3000
export default app
