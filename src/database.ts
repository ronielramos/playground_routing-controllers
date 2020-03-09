import { createConnection } from 'typeorm'
import { Product } from './entities/Product'
import { Provider } from './entities/Provider'

const createDbConnection = async () =>
  createConnection({
    type: (process.env.TYPEORM_CONNECTION as 'mysql' | undefined) ?? 'mysql',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT || ''),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Product, Provider]
  })

export default createDbConnection
