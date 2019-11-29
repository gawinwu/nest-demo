import { Controller, Get, Render } from '@nestjs/common';

// 使用根模块下的服务 NewsService
import { NewsService } from '../../../service/news/news.service'


@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {

    }
    @Get()
    index() {
        return `前台新闻首页  | <a href="news/list">news list</a>`
    }

    @Get('list')
    @Render('default/news')
    hello() {
        return { newsList: this.newsService.getNewsList() }
    }

}
