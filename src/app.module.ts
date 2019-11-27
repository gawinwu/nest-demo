import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { UesrController } from './uesr/uesr.controller';
@Module({
    imports: [],
    controllers: [AppController, NewsController, UesrController],
    providers: [AppService],
})
export class AppModule { }
