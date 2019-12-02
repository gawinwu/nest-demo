import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

import { NewsService } from '../../service/news/news.service'
import { LoginController } from './login/login.controller';
import { PanelController } from './panel/panel.controller';

// import { APP_GUARD } from '@nestjs/core';
// import { AdminGuard } from '../../guard/admin.guard' // 先取消guard

import { MongooseModule } from '@nestjs/mongoose';

import { ArticleSchema } from '../../schema/article.schema';
import { NavSchema } from '../../schema/nav.schema';

import { ArticleService } from '../../service/article/article.service';
import { ArticleController } from './article/article.controller';

import { NavService } from '../../service/nav/nav.service';
import { NavController } from './nav/nav.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Article',
                schema: ArticleSchema,
                collection: "article"
            },
            {
                name: 'Nav',
                schema: NavSchema,
                collection: "nav"
            },
        ])],

    controllers: [UserController, NewsController, LoginController, PanelController, ArticleController, NavController],
    providers: [
        NewsService,
        ArticleService,
        NavService,
        // {
        //     provide: APP_GUARD,
        //     useClass: AdminGuard
        // } // 先取消guard
    ]
})
export class AdminModule { }
