import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// const cookieParser = require('cookie-parser')
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'

import { join } from 'path';

import { logger } from './middleware/logger.middleware';


async function bootstrap() {
    //   const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', 'public'), {   //配置虚拟目录
        prefix: '/static/', //设置虚拟路径 
    });

    // 安装模板引擎  npm i ejs --save
    app.setBaseViewsDir('template');
    app.setViewEngine('ejs');

    app.use(cookieParser('secret key'))
    app.use(session({
        secret: 'keyboard test',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 30, httpOnly: true },
        rolling: true
    }));

    app.use(logger)

    await app.listen(3000);
}
bootstrap();
