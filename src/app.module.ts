import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

import { InitMiddleware } from './middleware/init.middleware';

import { Config } from './config/config';
import { NewsService } from './service/news/news.service';

// 配置数据库连接
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        AdminModule, ApiModule, DefaultModule,
        MongooseModule.forRoot(Config.mongodbPath,{ useNewUrlParser: true ,useUnifiedTopology: true})
    ],
    controllers: [],
    providers: [NewsService],
})
// export class AppModule { }
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            // .apply(AdminauthMiddleware)
            // .forRoutes(`${Config.adminPath}/*`)
            .apply(InitMiddleware)
            .forRoutes('*');
    }
}

