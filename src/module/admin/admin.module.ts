import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

import { NewsService } from '../../service/news/news.service'
import { LoginController } from './login/login.controller';
import { PanelController } from './panel/panel.controller';

import { APP_GUARD } from '@nestjs/core';
import { AdminGuard } from '../../guard/admin.guard'

import { ArticleService } from '../../service/article/article.service';
import { ArticleController } from './article/article.controller';

//配置model
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../entity/article.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],

    controllers: [UserController, NewsController, LoginController, PanelController, ArticleController],
    providers: [
        NewsService, ArticleService,
        // {
        //     provide: APP_GUARD,
        //     useClass: AdminGuard
        // }
    ]
})
export class AdminModule { }
