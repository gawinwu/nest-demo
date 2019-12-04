import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

import { NewsService } from '../../service/news/news.service'
import { LoginController } from './login/login.controller';
import { PanelController } from './panel/panel.controller';

import { APP_GUARD } from '@nestjs/core';
import { AdminGuard } from '../../guard/admin.guard'


//配置model
import { TypeOrmModule } from '@nestjs/typeorm';

import { Article } from '../../entity/article.entity';
import { Nav } from '../../entity/nav.entity';


import { ArticleService } from '../../service/article/article.service';
import { ArticleController } from './article/article.controller';

import { NavService } from '../../service/nav/nav.service';
import { NavController } from './nav/nav.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Article, Nav])],

    controllers: [UserController, NewsController, LoginController, PanelController, ArticleController, NavController],
    providers: [
        NewsService, ArticleService, NavService,
        // {
        //     provide: APP_GUARD,
        //     useClass: AdminGuard
        // }
    ]
})
export class AdminModule { }
