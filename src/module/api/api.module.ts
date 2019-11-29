import { Module } from '@nestjs/common';
import { NewsController } from './v1/news.controller';

@Module({
  controllers: [NewsController]
})
export class ApiModule {}
