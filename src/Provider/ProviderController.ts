
import { Controller, Param, Body, Get, Post, Delete, JsonController, Patch } from 'routing-controllers'
import { Provider } from '../entities/Provider'

@JsonController()
@Controller()
export class ProviderController {
  @Get('/providers')
  getAll () {
    return ('This action returns all providers')
  }

  @Get('/providers/:id')
  getOne (@Param('id') id: string) {
    return Provider.findOneOrFail(id)
  }

  @Post('/providers')
  post (@Body() provider: Provider) {
    return provider.save()
  }

  @Patch('/providers/:id')
  patch (@Param('id') id: string, @Body() provider: Provider) {
    return Provider.update(id, provider)
  }

  @Delete('/providers/:id')
  remove (@Param('id') id: string) {
    return Provider.delete(id)
  }
}
