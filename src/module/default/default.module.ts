import { Module } from '@nestjs/common';
import { NewsController } from './news/news.controller';

// 使用根模块下的服务 NewsService
import { NewsService } from '../../service/news/news.service'

import { IndexController } from './index/index.controller';

@Module({
    imports: [],//引入其他模块
    controllers: [NewsController, IndexController],
    providers: [NewsService] // 使用根模块下的服务 AppService
})

export class DefaultModule { }
