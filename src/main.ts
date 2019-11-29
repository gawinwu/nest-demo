import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// const cookieParser = require('cookie-parser')
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'

// import { AuthGuard } from './guard/auth.guard'

import { join } from 'path';

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
    app.use(session({ secret: 'secret key', cookie: { maxAge: 60000, httpOnly: true }, rolling: true }))

    // 全局守卫
    // app.useGlobalGuards(new AuthGuard())

    await app.listen(3000);
}
bootstrap();
