import { Controller, Get, UseGuards } from '@nestjs/common';


import { NewsService } from '../../../service/news/news.service'

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/news`)
export class NewsController {
    constructor(private newsService: NewsService) {

    }
    @Get()
    index() {
        return '后台新闻管理, <a href = "news/list">list</a>'
    }

    @Get('list')
    list() {
        return this.newsService.getNewsList()
    }

}
