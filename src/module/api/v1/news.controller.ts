import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/v1/news')
export class NewsController {
    @Get()
    index() {
        return 'Api/v1 新闻接口首页'
    }

    @Get(':id')
    list(@Param() param) {
        return `Id=${param.id}的新闻`
    }
}
