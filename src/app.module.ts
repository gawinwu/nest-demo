import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';

import { InitMiddleware } from './middleware/init.middleware';
import { UserMiddleware } from './middleware/user.middleware';
import { NewsMiddleware } from './middleware/news.middleware';

import { logger } from './middleware/logger.middleware';


@Module({
    imports: [],
    controllers: [AppController, NewsController, UserController, ProductController],
    providers: [AppService],
})
// export class AppModule { }
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer
        //     .apply(InitMiddleware)
        //     // .forRoutes('*');   // 匹配所有的路由
        //     // .forRoutes('user')    //匹配指定路由
        //     .forRoutes(
        //         { path: 'user', method: RequestMethod.ALL }, // GET、POST、 ... ALL
        //         { path: 'news', method: RequestMethod.ALL }
        //     )    //匹配多个路由


        // consumer
        //     .apply(InitMiddleware).forRoutes('*')
        //     .apply(UserMiddleware).forRoutes('user')

        consumer
            .apply(UserMiddleware, NewsMiddleware, logger)
            .forRoutes(
                { path: 'user', method: RequestMethod.ALL },
                { path: 'news', method: RequestMethod.ALL },
            )

    }
}

