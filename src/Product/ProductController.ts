
import { Param, Body, Get, Post, Delete, JsonController, Patch, QueryParam } from 'routing-controllers'
import { Product } from '../entities/Product'

@JsonController()
export class ProductController {
  @Get('/products')
  async getAll (@QueryParam('page') page: number) {
    const correctPage = page > 0 ? page - 1 : 0
    const skip = (correctPage || 1) * 10
    const products = await Product.find({ take: 10, skip })
    return products
  }

  @Get('/products/:id')
  getOne (@Param('id') id: string) {
    return Product.getRepository().findOneOrFail(id)
  }

  @Post('/products')
  post (@Body({ validate: true }) product: Product) {
    return product.save()
  }

  @Patch('/products/:id')
  async patch (@Param('id') id: string, @Body() product: Product) {
    return Product.update(id, product)
  }

  @Delete('/products/:id')
  remove (@Param('id') id: string) {
    return Product.delete(id)
  }
}
