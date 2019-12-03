import { Controller, Get } from '@nestjs/common';

import { ArticleService } from '../../../service/article/article.service';
import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/article`)
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    async index() {
        let result = await this.articleService.findAll()
        return result
    }
}
