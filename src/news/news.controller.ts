import { Controller, Get, Query, UsePipes } from '@nestjs/common';

import { NewsPipe } from '../pipe/news.pipe'

@Controller('news')
export class NewsController {

    @Get()
    @UsePipes(new NewsPipe())
    index(@Query() info) {
        console.log(info);

        return '新闻模块!'
    }
}
