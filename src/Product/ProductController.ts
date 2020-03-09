
import { Controller, Param, Body, Get, Post, Delete, JsonController, Patch } from 'routing-controllers'
import { Product } from '../entities/Product'

@JsonController()
@Controller()
export class ProductController {
  @Get('/products')
  getAll () {
    return 'This action returns all products'
  }

  @Get('/products/:id')
  getOne (@Param('id') id: string) {
    return Product.getRepository().findOneOrFail(id)
  }

  @Post('/products')
  post (@Body() product: Product) {
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
